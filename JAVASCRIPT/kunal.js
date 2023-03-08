let mark = []
function ok(){
    document.getElementById("num").innerHTML = "Marks : " + mark
}

function add(){
let userinput = document.getElementById("input").value 
document.getElementById("input").value = ""

if(!userinput){
    alert("Enter A Number")
    return
}

if(mark.length >= 4){
    alert("Access Denied")
    return
}

mark.push(userinput);
console.log (mark)

ok() 
}

function result() {
    let 
}