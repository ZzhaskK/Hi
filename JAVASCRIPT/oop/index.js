// class User{
//     #age                                     // private property banako      class bata matra access garna milxa      bahira bata milne is public
//     constructor(name, age){
//         this.name = name;
//         this.#age = age;
//         this.country = "Nepal";
//     }
//      get age()
//      {
//         return this.#age
//      }

//      set age(age)
//      {
//         this.#age = age
//      }

// }

// const u1 = new User("Ram", 12);
// // console.log(ram.getName());

// console.log(u1.age = 51)

class User{
    #email
    #pin

    constructor(email, pin){
        this.email = email;
        this.#pin = pin;
    }

    get email(){
        return this.#email
    }

    get pin(){
        return this.#pin + 4
    }

    // set pin(pin){
    //     this.#pin = pin - 4
    // }
    
    set pin(pin){
        let oldPin = parseInt(prompt("Enter old pin"))
        if(oldPin == this.#pin + 4)
        {
            this.#pin = pin - 4
        }else{
            alert("Incorrect pin")
        }
    }    

        set email(email){
            this.#email = email
        }
    
}


const user = new User("Ramu69@gmail.com", 6969);

console.log(user.email)
console.log(user.pin)

console.log(user);

user.pin = 5555;

console.log(user.pin)

console.log(user);