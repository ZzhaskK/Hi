// const obj = {
//     name : "Ram",
//     age : 2,
//     intro : function() {
//         console.log("My name is " + this.name);
//     }
// }
// // console.log(obj['name'])
// console.log(obj.name)
// console.log(obj.intro())

// const objt = {
//     name : "Ramesh",
//     age : 69,
//     intro : () => {
//         console.log("My name is " + this.name);    // this vaneko this instance                               => le globally hercha Tesaile name print hudaina bahira ko linxa      
//     }                                               // obj ma we use function()
// }
// console.log(objt.intro())



// function user(name, age){
//     return{ /// { obj
//         name: name,
//         age: age,
//         intro: function(){
//             console.log("My name is " + this.name + " ,Age= " + this.age)
//         }
//     }
// }

// let user1; // = user("Ram", 12);
// // const user2 = user("Hari", 33);
// // user1.intro()
// // user2.intro()

// // console.log(JSON.stringify(user1))    // string                      ( . ) vanne kura only works in object
// // console.log(user2.name)
// console.log(user1?.name)                  // ?user1 jastai kunai ni name cha vaye teslai print gar



const users = [];
function User(name, age){
        return{ 
            name,
            age,
            intro: function(){
                alert(`My name is   ${this.name}   and my age is   ${this.age}   years.`)
            }
        } 
    }

    function formatuser(index, user) {
        return `
        <li>
        ${index+1}. ${user.name}
        <ul>
          <li>Age: ${user.age}</li>
          <li><button onclick="intro(${user.intro})">Say Hi</button></li>
        </ul>
      </li>`;
    }
    

    function intro(fn){
        fn()
    }


    function createuser(){
        const nameElement = document.getElementById("name");
        const ageElement = document.getElementById("age");

        const user = User(nameElement.value, ageElement.value);
         users.push(user);

        nameElement.value = "";
        ageElement.value = "";

        document.getElementById("user-list").innerHTML = users.map((user,index => formatuser(index, user)))
    }



    
   
       