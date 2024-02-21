console.log("Hello World!")

// Make API calls using fetch
fetch('https://jsonplaceholder.typicode.com/todos/i')
.then(response => response.json())
.then(json => console.log(json))

let fname = 'Chinetam'
let lname = 'Onyemaechi'
let fullName = `${fname} ${lname}`

console.log(typeof fullName)

let age = Number

console.log(age)

function name(params) {
    
}
let obj = {
    name: "Netam",
    age: 20,
    num: 889,
    school: "unec",
}

for (let name in obj) {
   console.log(obj)
}
console.log(obj.school)
  
//   // Function to convert object keys to uppercase
//   function convertKeysToUpperCase(obj) {
//     const newObj = {};
//     for (let key in obj) {
//       newObj[key.toUpperCase()] = obj[key];
//     }
//     return newObj;
//   }
  
//   // Convert keys to uppercase
//   const newObj = convertKeysToUpperCase(obj);
  
//   // Output the new object
//   console.log(newObj);

// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

// let calculator = {

//     sum() {
//         return this.a + this.b
//     },

//     mul() {
//         return this.a * this.b
//     },

//     read() {
//         this.a = +prompt('a?',0)
//         this.b = +prompt('b?',0)
//     },
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      console.log(this.age);
      console.log(user.name)
    }
  
  };
  
  user.sayHi(); 