/*
 * File: ImageProcessingAdapter.js
 *
 * Description: Abstracts away the sharp NPM Module interface for the rest of the application.
 * 
 * Created by Jamie Corkhill on 06/10/2019 at 08:58 PM (Local), 06/11/2019 at 01:58 AM (Zulu)
 */

const sharp = require('sharp');

module.exports = class ImageProcessingAdapter {
    async processImageWithDefaultConfiguration(buffer, size, options) {
        return await sharp(buffer)
            .resize(size)
            .jpeg(options)
            .toBuffer();
    }
}