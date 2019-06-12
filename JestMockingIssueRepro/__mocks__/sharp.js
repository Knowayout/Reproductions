// Option One (Does Not Work) - Error: Maximum Call Stack Size Exceeded
// const sharp = require('sharp');
// jest.genMockFromModule('sharp');
// module.exports = sharp;


// // Option Two (Does Not Work) - Error: sharp is not a function.
const Sharp = jest.fn().mockImplementation(() => ({
    resize: jest.fn().mockReturnThis(),
    jpeg: jest.fn().mockReturnThis(),
    toBuffer:jest.fn().mockReturnThis()
}));

module.exports = Sharp;
