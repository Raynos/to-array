# to-array

Turn an array like into an array. Designed for browser support in older browsers.

## Example

``` js
var toArray = require("to-array")
    , elems = document.links

var array = toArray(elems)
```
Can also return an array from a specific index

```js
(function () {
  toArray(arguments, 2) // [3, 4]
})(1, 2, 3, 4)
```

## Installation

`npm install to-array`

## Contributors

 - Raynos
 - [Olivier Scherrer](http://github.com/podefr)

## MIT Licenced
