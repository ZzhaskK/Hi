
// function sayHi(name)
// {
//     return `Hi ${name}`;
// }
// function sayBye(name)
// {
//     return `Bye ${name}`;
// }

// function takeAction(type)
// {
//     let username = document.getElementById("text").value;
//     switch(type)                                                          // if else jastai
//     {
//         case "hi":
//             display(username, sayHi)
//             break;
//         case "bye":
//             display(username, sayBye)
//             break;
//         default: 
//             console.log("Invalid")
//     }  
// }

// function display(name, getMsg)                                             //  display higher order function        getMsg 
// {
//     alert(getMsg(name))
// }

// const num = [1, 2, 3, 4, 5];
// num.forEach((value, index, arr) =>
// {
//     console.log(value, index, arr);
// })



// const sq =num.map((value, index, arr) => {
//     return value * value;
// })

// console.log(sq);



// const even =num.filter((value, index, arr) => {
//     return value % 2 == 0;
// })

// console.log(even);



// const sum = num.reduce((acc, value, index, arr) =>{
//     return acc + value;
// })
// console.log(sum);


// const ok = num.every((value, index, arr) => {               // svaai milna paryo
//     return value * value;
// })
// console.log(ok);


// const okk = num.some((value, index, arr) => {                 // kunai euta milna paryo
//     return value * value;
// })
// console.log(ok);

let marks = []
function ok(){
document.getElementById("yes").innerHTML= "Marks: " + marks
}

function add(){
let userinput = document.getElementById("text").value 
if(!userinput)
{
 alert("Please enter a valid number")
 return
}

marks.push(userinput);
ok()
document.getElementById("text").value = ""
}

function result () {
    if(marks.length === 0){
        alert("Please enter Marks")
        return
    }
    let obtainedMarks = marks.reduce((acc, marks) => acc + parseFloat(marks), 0)
    let totalMarks = marks.length * 100
    let percentage = (obtainedMarks/totalMarks)*100
    if (percentage > 40) {
        document.getElementById('result2').innerHTML = "Result: PASS"
    } else {
        document.getElementById('result2').innerHTML = "Result: FAIL"
    }    
    document.getElementById("per").innerHTML = "Percentage: " + percentage + "%"
}     //isNaN    savai lai chuttai function dine