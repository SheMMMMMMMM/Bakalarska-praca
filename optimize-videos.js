import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import ffprobeInstaller from '@ffprobe-installer/ffprobe';
import fs from 'fs';
import path from 'path';

// Встановити шляхи до ffmpeg і ffprobe
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
ffmpeg.setFfprobePath(ffprobeInstaller.path);

async function optimizeVideos() {
    const videosDir = 'src/assets/videos';
    
    // Рекурсивно знайти всі MP4 файли
    function getAllVideoFiles(dir) {
        let files = [];
        const items = fs.readdirSync(dir, { withFileTypes: true });
        
        for (const item of items) {
            const fullPath = path.join(dir, item.name);
            if (item.isDirectory()) {
                files = files.concat(getAllVideoFiles(fullPath));
            } else if (item.name.endsWith('.mp4') || item.name.endsWith('.MP4')) {
                files.push(fullPath);
            }
        }
        return files;
    }

    const videoFiles = getAllVideoFiles(videosDir);
    
    if (videoFiles.length === 0) {
        console.log('❌ Відео файлів не знайдено');
        return;
    }

    console.log(`🎬 Знайдено ${videoFiles.length} відео файлів для оптимізації\n`);

    let processed = 0;
    
    for (const inputFile of videoFiles) {
        console.log(`⏳ Обробка: ${inputFile}`);
        
        const tempFile = inputFile + '.temp.mp4';
        
        await new Promise((resolve, reject) => {
            ffmpeg(inputFile)
                // Встановити відеокодек H.264
                .videoCodec('libx264')
                // Встановити якість і швидкість
                .outputOptions([
                    '-crf 32',  // Якість 32 (менше = краще, але більше розміру)
                    '-preset ultrafast'  // Найшвидше кодування (зменшує навантаження на CPU)
                ])
                // Встановити аудіокодек
                .audioCodec('aac')
                // Встановити бітрейт аудіо
                .audioBitrate('96k')
                .save(tempFile)
                .on('end', () => {
                    // Замінити оригінальний файл на оптимізований
                    fs.unlinkSync(inputFile);
                    fs.renameSync(tempFile, inputFile);
                    
                    const originalSize = fs.statSync(inputFile).size;
                    processed++;
                    console.log(`✅ Готово (${processed}/${videoFiles.length}): ${inputFile}`);
                    console.log(`   Розмір: ${(originalSize / 1024 / 1024).toFixed(2)} MB\n`);
                    
                    resolve();
                })
                .on('error', (err) => {
                    console.error(`❌ Помилка: ${err.message}`);
                    if (fs.existsSync(tempFile)) {
                        fs.unlinkSync(tempFile);
                    }
                    reject(err);
                });
        });
    }
}

console.log('🎥 Розпочинаємо оптимізацію відео...\n');
console.log('⚠️  Це може зайняти кілька хвилин...\n');

try {
    await optimizeVideos();
    console.log('✅ Оптимізація всіх відео завершена!');
} catch (error) {
    console.error('❌ Помилка під час оптимізації:', error);
    process.exit(1);
}
