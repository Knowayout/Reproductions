/*
 * File: index.js (Entry)
 *
 * Description: Shows ImageProcessingAdapter in operation.
 * 
 * Created by Jamie Corkhill on 06/10/2019 at 09:04 PM (Local), 06/11/2019 at 02:04 AM (Zulu)
 */

const fs = require('fs');
const path = require('path');

// Custom
const ImageProcessingAdapter = require('./adapters/sharp/ImageProcessingAdapter');

// Utilities
const promisifiedReadFile = filePath => new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
        if (err) return reject(err);
        resolve(data);
    });
});

const promisifiedWriteFile = (filePath, data) => new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, err => {
        if (err) return reject();
        resolve();
    });
});

// Perform operation.
const main = async () => {
    // File Paths
    const originalFilePath = path.join(__dirname, '/assets/original/nasa.png');
    const processedFilePath = path.join(__dirname, '/assets/new/nasa.jpg');

    // Configuration
    const size = { width: 300, height: 300 };
    const options = { quality: 100, progressive: true };

    try {
        const buffer = await promisifiedReadFile(originalFilePath);
        const resizedBuffer = await new ImageProcessingAdapter()
            .processImageWithDefaultConfiguration(buffer, size, options);

        console.log(resizedBuffer)
        
        await promisifiedWriteFile(processedFilePath, resizedBuffer);
    } catch (e) {
        throw new Error(e);
    }
}

main().then(() => console.log('Complete'), err => console.log('Error', err));