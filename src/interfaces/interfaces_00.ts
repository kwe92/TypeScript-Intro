
// Interface Signature
// - An abstraction of a method of an object consisting of:
//      - method name
//      - method parameters
//      - method return value

type distanceFunction = (p:Point) => number;

// Interface
// - The set of all member variables and signatures for an object
interface Point{
    x:number;
    y:number;
    euclideanDistance?:distanceFunction
}

const x = 3;
const y = 4;

const p1: Point = {
    x:x,
    y:y,
    euclideanDistance: (p:Point) => Math.sqrt(Math.pow(p.x - x,2) + Math.pow(p.y - y,2),)
}

const p2:Point = {
    x:12,
    y:16,
}

console.log("Euclidean Distance: ", p1.euclideanDistance!(p2))