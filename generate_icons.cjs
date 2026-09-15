const sharp = require('sharp');
const fs = require('fs');

async function generate() {
    try {
        const svgBuffer = fs.readFileSync('icon.svg');
        
        await sharp(svgBuffer)
            .resize(192, 192)
            .png()
            .toFile('icon-192.png');
            
        await sharp(svgBuffer)
            .resize(512, 512)
            .png()
            .toFile('icon-512.png');
            
        console.log('Successfully generated icon-192.png and icon-512.png');
    } catch (err) {
        console.error('Error:', err);
    }
}

generate();
