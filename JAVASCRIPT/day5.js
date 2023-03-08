let array = ["1", "2", "3", "4"]

let userinput = document.getElementById("okk")

function reRendner(){
    document.getElementById("ok").innerHTML = "Items: " + array
}

function push(){
    let a = userinput.value;
    array.push(a)
    reRendner()
 }
function pop(){
    array.pop();
    reRendner()
}
function unshift(){
    let a = userinput.value;
    array.unshift(a)
    reRendner()
}
function shift(){
    array.shift();
    reRendner()
}

reRendner()

//  console.log(array.slice(2, 4));
//  console.log(array)

//  console.log(array.splice(2, 0, 4));
//  console.log(array)

