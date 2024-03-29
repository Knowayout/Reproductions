# JestMockingIssueRepro

### Installation

Clone the repository and run `npm install`.

### Usage

Take a look at the `/assets/original` folder. Inside, there should be a PNG file of the NASA logo.
The application will attempt to convert the image to a JPG, resize it to 300 x 300, and save it to the `/assets/new` folder.

Run `node index.js` from the root directory to see this.

### Testing

Both methods of mocking the `sharp` module fail - that is, using `jest.genMockFromModule` and returning an object with each function returning `this`.

```
npm test
```

### Solution
06/14/2019 at 03:08 AM Zulu Time, this issue now has a solution. The contents of the `__mocks__/sharp.js` file should be as follows.

```javascript
const mock = {
    resize: jest.fn().mockReturnThis(),
    jpeg: jest.fn().mockReturnThis(),
    toBuffer: jest.fn().mockReturnThis()
}; 

module.exports = jest.fn(() => mock);
```
Thanks to Stack Overflow user `brian-lives-outdoors` for providing this solution. 
