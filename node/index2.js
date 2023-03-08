// const fn = require('./function2');

// console.log(fn.add(2, 3));
// console.log(fn.sub(2, 3));
// console.log(fn.mul(2, 3));
// console.log(fn.div(2, 3));



// let obj = {
//     name : "Okesh",
//     age : 21
// }

// obj.height = 69

// console.log(obj)



// files module section:
// const fs = require('fs');

// const text = fs.readFileSync('test.txt', 'utf-8');    // utf-8 means character format

// console.log(text);

// fs.writeFileSync('test.txt', 'Hi Ok bye');

//  fs.unlinkSync('test.txt')

// const text = fs.readFileSync('ok.txt', 'utf-8');    // utf-8 means character format

// console.log(text);

// // fs.writeFileSync('okok.txt', text);        //(file ko name, k text lekhne tyo file ma)

// //  fs.unlinkSync('ok.txt')    // delets a file

// const fs = require('fs');

// fs.readFile("ok.txt", "utf8", (err, data) => {
//     if(!err)
//     {
//         console.log(data);
//     }else{
//         console.log(err);
//     }
// })


// fs.writeFile("okok.txt", "Hello World", (err) => {
//     if(!err)
//     {
//         console.log("File Created Successfully!");
//     }else{
//         console.log(err);
//     }
// })

// fs.unlinkSync('ok.txt', (err) => {
//     if(!err)
//     {
//         console.log("File Deleted Successfully!")
//     }else{
//         console.log("Failed")
//     }
// }) 

const fs = require('fs');

// const readFile = "file1.txt";
// const writeFile = "file2.txt";

// fs.readFile(readFile,"utf8", (err, data) => {
//     if(!err) {
//         fs.writeFile(writeFile, data, (err) => {
//             if(!err){
//                 fs.unlink(readFile, (err) => {
//                     if(!err){ 
//                         console.log("File deleted successfully");
//                     }else{
//                         console.log(err);
//                     }
//                 });
//             }else{
//                 console.log(err);
//             }
//         });
//     }else{
//         console.log("Read file error " + err);
//     }
// });


function readfileAsync(filename){
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

async function run()
{
    const data = await readfileAsync('file2.txt');
    await writeFileAsync("file1.txt", data);
    await unlinkAsync("file2.txt");
}

run()





