This repository contains a demonstration of `JSON.stringify` failing on large JS objects. It also demonstrates that the following libraries are able to stringify the same large objects:
- [big-json](https://www.npmjs.com/package/big-json)
- [BFJ](https://www.npmjs.com/package/bfj)

**Dependency**: https://git-lfs.com/ (large file management)

The code in `process.js` loads the `bigFile.json` and parses its content to the JS object. This object is then passed to the library's `stringify` function to demonstrate that it works fine. By default, the `big-json` library is used. If you want to test the `BFJ` library, comment-out the code with `big-json` stringify and uncomment the `BFJ` code instead. If you leave both un The last step is calling the `JSON.stringify` function on the same object, which should fail with `Invalid string length` error.

The repository contains `okFile.json` as well. The JS object parsed from this file can be handled by `JSON.stringify`. You can test this by replacing `bigFile.json` string in `process.js` with `okFile.json`.