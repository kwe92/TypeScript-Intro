var anyFunc = function (e) { return e; };
var genFuncArrow = function (e) { return e; };
console.log(anyFunc(5).someFunctionThatDoesNotExist(3.14));
console.log(genFuncArrow(5).toFixed(10));
