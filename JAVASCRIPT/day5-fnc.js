// // // function add(num1,num2){                                      //(num1 and num2 are parameters)
// // //     console.log(num1 + num2)
// // // }
// // // add(1, 2)                                                       // (1,2 are arguments)

// // // function sub(num1,num2){
// // //     console.log(num1 - num2)
// // // }
// // // sub(3, 2)

// // // (function add(num1,num2){
// // //     console.log(num1 + num2)
// // // })(1, 2)

// // // (function add(num1,num2){
// // //    let result = num1+ num2;
// // //     console.log(`Sum= ${result}`);
// // // })(1, 2)

// // // let a = function(a, b){                      // function is called first class citizen because it can assign variable pani. function lai variable
// // //     console.log("Hi" + a+b)
// // // }
// // // a(6, 9);


// // // let a = (a, b) => {                              // => works like function Called arrow function
// // //     console.log("Hi" + a+b)
// // // }
// // // a(6, 9);


// // // let a = a =>                               
// // //     console.log("Hi" + a)
// // // a(6);

// // let Welcome = user => console.log(`Welcome ${user}`);       // ${} ko meaning means declare gareko variable use garne

// // Welcome("Ram")

let add = (num1, num2) => num1+ num2
let subtract= (num1, num2) => num1 - num2
function calculate(num1, num2, operation)
{
    return operation(num1, num2)
}
function run(num1, num2, sym)
{
    let fn
    if(sym == "+")
        fn = add
    else
        fn = subtract;
    
    console.log(calculate(num1, num2, fn))
}

run(10, 20, '+')
run(10, 20, '-')

