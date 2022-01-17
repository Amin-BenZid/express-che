# create-arr

Utility to create arrays from simple parameters. Improved version of C#'s `Enumerable.Range`.

## Installation

Install the package like this:
```
npm install --save create-arr
```

## Usage

```js
const arr = require("create-arr");

console.log(arr(3, 5)); // [5, 5, 5]
console.log(arr(1, 4)); // [4]
console.log(arr(5, i => i*2)); // [0, 2, 4, 6, 8]

console.log(arr.r(5)); // [0, 1, 2, 3, 4]
console.log(arr.r(1, 5)); // [1, 2, 3, 4, 5]
console.log(arr.r(6, 3, v => v*2)); // [12, 14, 16]
console.log(arr.r(6, 3, (v, i) => v + i)); // [6, 8, 10]
```

## Licence
This project is licenced under the MIT licence. Read it [here](LICENCE).
