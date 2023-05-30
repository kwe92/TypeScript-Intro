type anyIdentityFunction = (e: any) => any

type genericIdentityFunction<T> = (e: T)  => T

const anyFunc: anyIdentityFunction = (e: any) => e;

const genFuncArrow: genericIdentityFunction<number> = <T> (e: T) => e;

console.log(anyFunc(5).someFunctionThatDoesNotExist(3.14))
console.log(genFuncArrow(5).toFixed(10))
