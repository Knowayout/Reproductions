### JestMockingIssueRepro

# Installation

Clone the repository and run `npm install`.

# Usage

Take a look at the `/assets/original` folder. Inside, there should be a PNG file of the NASA logo.
The application will attempt to convert the image to a JPG, resize it to 300 x 300, and save it to the `/assets/new` folder.

Run `node index.js` from the route directory to see this.

# Testing

Both methods of mocking the `sharp` module fail - that is, using `jest.genMockFromModule` and returning an object with each function returning `this`.

```
node index.js
```