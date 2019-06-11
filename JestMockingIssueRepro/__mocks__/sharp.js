// Option One (Does Not Work) - Error: Maximum Call Stack Size Exceeded
// const sharp = require('sharp');
// jest.genMockFromModule('sharp');
// module.exports = sharp;


// // Option Two (Does Not Work) - Error: sharp is not a function.
module.exports = {
    sharp() {
        return this;
    },
    resize() {
        return this;
    },
    jpeg() {
        return this;
    },
    toBuffer() {
        return this;
    }
}