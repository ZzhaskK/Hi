// function sayHi()
// {
//     console.log("Hi!")
// }

// // module.exports = {sayHi};
// // module.exports = {         // same line 6
// //     sayHi,
// // }
// exports.sayHi = sayHi        // same line 6

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

module.exports = {
    add,
    sub,
    mul,
    div
}


// exports.add = (a,b) => a + b;     // same line 12