// let color = ["red", "green", "pink", "12", "oka2", "y2", "Mt.everest", "hi", "9", "yu2"];  
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let choice = [1, "num"] 

//console.log(color.length)   // gives length

// console.log(color[0])         //0 dekhin start  0=red, 1=green
// console.log(color[1])   
// console.log(color[2])   
// console.log(color[3])   
// console.log(color[4])
// console.log(color[5])
// console.log(color[6])   
// console.log(color[7])
// console.log(color[8])
// console.log(color[9])


//  for(let i=0; i < color.length; i++){
//    console.log(color[i])
// }



// for(let i in color){
//    console.log(color[i])
// }


// let i = 1
// for(let item of color)
// {
//    console.log(i + ". " + item)
//     i++
// }

// for(let item of num)
// {
//     console.log(item)
// }


// let i = 1
// for( let i in color)
// {
//    console.log ('${parseInt(i')
// }





// let fruit = ["apple", "mango", 1, "grapes", "banana"];

// let i = 0
// while(fruit[i] != 1)
// {
//    console.log(fruit[i])
//    i++
// }


// for(let item of fruit)
// {
//    if(item == 1)
//    break
//    console.log(item)
// }


// let str= " hello world "
// console.log(str.toUpperCase())


function count()
{
    let str = document.getElementById('my-text').value
    let words = str.trim()
    console.log(words);
    // console.log("here" + str);
    document.getElementById('result').innerHTML = "Total Word Count = " +  words.length
}