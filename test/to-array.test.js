var test = require("tap").test
    , sut = require("../index")

test("to-array", function (t) {
  (function () {

    t.same(sut(arguments), [0, 1, 2, 3], "transforms array-like array into an array")
    t.same(sut(arguments, 2), [2, 3], "transforms into an array from specified index")

  })(0, 1, 2, 3)

  t.end()
})
