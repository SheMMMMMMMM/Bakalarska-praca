import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import path from 'path';

(async () => {
    console.log('Розпочинаємо оптимізацію зображень...');
    
    try {
        // Оптимізація всіх зображень в папці src/assets/images
        const files = await imagemin(['src/assets/images/**/*.{jpg,jpeg,png}'], {
            destination: 'src/assets/images',
            plugins: [
                imageminMozjpeg({ 
                    quality: 75,  // Якість JPG від 0-100
                    progressive: true
                }),
                imageminPngquant({
                    quality: [0.6, 0.8]  // Якість PNG 60-80%
                })
            ]
        });
        
        console.log('✅ Оптимізація завершена!');
        console.log(`Обробленно ${files.length} файлів:`);
        files.forEach(file => {
            console.log(`  - ${file}`);
        });
    } catch (error) {
        console.error('❌ Помилка:', error);
        process.exit(1);
    }
})();
