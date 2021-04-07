// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// addOne
function addOne(input) {
    if (typeof input !== "number") {
        return NaN;
    } else {
        return input + 1;
    }
}

//sayHello
// function sayHello(input) {
//     return "Hello, " + input + "!";
// }
function sayHello(x) {
    if (x === true) {
        return "Hello, " + x + "!";
    }
}