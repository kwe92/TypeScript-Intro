var x = 3;
var y = 4;
var p1 = {
    x: x,
    y: y,
    euclideanDistance: function (p) { return Math.sqrt(Math.pow(p.x - x, 2) + Math.pow(p.y - y, 2)); }
};
var p2 = {
    x: 12,
    y: 16
};
console.log("Euclidean Distance: ", p1.euclideanDistance(p2));
