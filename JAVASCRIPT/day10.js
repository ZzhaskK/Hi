// // let arr1 = [1, 2, 3, 4]          //different adress
// // let arr2 = [1, 2, 3, 4]

// // console.log(arr1 == arr2)   // false

// // let a= 1
// // let b = 2

// // console.log(a ==b )    //true

// // callback, delay(ms)

// // setTimeout(() => {
// //     console.log("hi");
// // }, 5000)


// // setInterval(() => {
// //     console.log("hello");
// // }, 3000);

// function sayhi()
// {
//     setTimeout(() => {
//         console.log("hi");
//     }, 3000);
// }
// console.log("start");
// sayhi()
// console.log("end");

// function add (a, b, cb)
// {
//     setTimeout(() => {
//         console.log(a + b);
//         cb();
//     }, 3000);
// }
// console.log("Start");
// add(2, 3, end);

// function end(){
//     console.log("End");
// }

// function add(a, b, cb)
// {
//     setTimeout(() => {
//         cb(a+b);
//     }, 3000);
// }
// function mul(a,b,cb)
// {
//     setTimeout(() => {
//         cb(a * b);
//     }, 3000);
// }

// function sub(a, b, cb)
// {
//     setTimeout(() => {
//         cb(a-b);
//     }, 3000)
// }

// console.log("start");

// add(3, 5, (s) => {
//     mul(s, 2, (m) => {
//         sub(m, 2, (s) => {
//             console.log(s);
//         })
//     })
// })

// function add(a, b)
// {
//     return new Promise((resolve, reject) => {           // maintains state
//         setTimeout(() => {
//             resolve(a + b);
//         }, 3000)
//     });
// }
// console.log("start")
// console.log(add(3,5));
// console.log("end");

// function add(a, b)
// {
//     return new Promise((resolve, reject) => {         S
//         setTimeout(() => {
//             let result = a + b;
//             resolve(result);
//         }, 3000)
//     });
// }
// console.log("start")
// console.log(add(3,5));
// console.log("end");


// function sub(a, b)
// {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             let result = a - b;
//             if(result >= 0){
//                 res(result);
//             }
//             else{
//                 rej("Invalid Number");
//             }
//         }, 3000)
//     })
// }
// console.log("Start")
//  console.log(sub(5, 4))

// sub(3, 5).then((res) => {
//     console.log(res)
// }).catch((err) => {        .catch le error haru catch garera prints
//     console.log(err);
// })
// // console.log("End")

// async await       async function le wrap garna parxa to use await
// promise ma matrai chalxa await async


// async function main()
// {
//     try{
//         console.log("Start");
//     let result = await sub(5, 9);
//     console.log(result);
//     console.log("End")
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// main()
// console.log("OK")

function card(user)
{
    return `
    <div>
    <h3>${user.name}<h3>
    <ul>
    <li>Email: ${user.email}<li>
    <li>Address: ${user.address.street}, ${user.address.city}<li>
    </ul>
    </div>
    `
}

const userListElement = document.getElementById("user-list");

fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
    res.json().then(result => {
        userListElement.innerHTML = result.map(user => card(user)).join("<br>");
    });
});

// const userListElement = document.getElementById("user-list");
// async function run()
// {
//     try{

//     }
// }