import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import ffprobeInstaller from '@ffprobe-installer/ffprobe';
import fs from 'fs';

// Встановити шляхи до ffmpeg і ffprobe
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
ffmpeg.setFfprobePath(ffprobeInstaller.path);

async function optimizeSingleVideo() {
    const inputFile = 'src/assets/videos/study_vibe/1.MP4';
    
    if (!fs.existsSync(inputFile)) {
        console.log(`❌ Файл не знайдено: ${inputFile}`);
        return;
    }

    console.log(`🎬 Оптимізація: ${inputFile}`);
    console.log(`📊 Якість: 90%\n`);
    
    const tempFile = inputFile + '.temp.mp4';
    
    await new Promise((resolve, reject) => {
        ffmpeg(inputFile)
            // Встановити відеокодек H.264
            .videoCodec('libx264')
            // CRF 18-20 для якості ~90%
            .outputOptions([
                '-crf 19',  // Якість 90%
                '-preset fast'  // Швидкість обробки
            ])
            // Встановити аудіокодек
            .audioCodec('aac')
            // Встановити бітрейт аудіо
            .audioBitrate('128k')
            .save(tempFile)
            .on('end', () => {
                // Отримати розміри
                const originalSize = fs.statSync(inputFile).size;
                const optimizedSize = fs.statSync(tempFile).size;
                const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
                
                // Замінити оригінальний файл на оптимізований
                fs.unlinkSync(inputFile);
                fs.renameSync(tempFile, inputFile);
                
                console.log(`✅ Оптимізація завершена!\n`);
                console.log(`📊 Статистика:`);
                console.log(`   Оригінальний розмір: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
                console.log(`   Оптимізований розмір: ${(optimizedSize / 1024 / 1024).toFixed(2)} MB`);
                console.log(`   Економія: ${savings}%\n`);
                
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

console.log('🎥 Розпочинаємо оптимізацію відео...\n');
console.log('⚠️  Це може зайняти кілька хвилин...\n');

try {
    await optimizeSingleVideo();
    console.log('✅ Готово!');
} catch (error) {
    console.error('❌ Помилка під час оптимізації:', error);
    process.exit(1);
}
