jest.mock('sharp');
const sharp = require('sharp');

const ImageProcessingAdapter = require('./../../adapters/sharp/ImageProcessingAdapter');

test('Should call module functions with correct arguments', async () => {
    // Mock values
    const buffer = Buffer.from('a buffer');
    const size = { width: 10, height: 10 };
    const options = 'options';

    // SUT
    await new ImageProcessingAdapter().processImageWithDefaultConfiguration(buffer, size, options);

    // Assertions
    expect(sharp).toHaveBeenCalledWith(buffer);
    expect(sharp().resize).toHaveBeenCalledWith(size);
    expect(sharp().jpeg).toHaveBeenCalledWith(options);
});
