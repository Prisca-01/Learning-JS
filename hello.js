// console.log("Hello World!")

// // Make API calls using fetch
// fetch('https://jsonplaceholder.typicode.com/todos/i')
// .then(response => response.json())
// .then(json => console.log(json))

// let fname = 'Chinetam'
// let lname = 'Onyemaechi'
// let fullName = `${fname} ${lname}`

// console.log(typeof fullName)

// let age = Number

// console.log(age)

// function name(params) {
    
// }
// // let obj = {
// //     name: "Netam",
// //     age: 20,
// //     num: 889,
// //     school: "unec",
// // }

// // for (let name in obj) {
// //    console.log(obj)
// // }
// // console.log(obj.school)
  
// //   // Function to convert object keys to uppercase
// //   function convertKeysToUpperCase(obj) {
// //     const newObj = {};
// //     for (let key in obj) {
// //       newObj[key.toUpperCase()] = obj[key];
// //     }
// //     return newObj;
// //   }
  
// //   // Convert keys to uppercase
// //   const newObj = convertKeysToUpperCase(obj);
  
// //   // Output the new object
// //   console.log(newObj);

// // Create an object calculator with three methods:

// // read() prompts for two values and saves them as object properties with names a and b respectively.
// // sum() returns the sum of saved values.
// // mul() multiplies saved values and returns the result.

// // let calculator = {

// //     sum() {
// //         return this.a + this.b
// //     },

// //     mul() {
// //         return this.a * this.b
// //     },

// //     read() {
// //         this.a = +prompt('a?',0)
// //         this.b = +prompt('b?',0)
// //     },
// //   };
  
// //   calculator.read();
// //   alert( calculator.sum() );
// //   alert( calculator.mul() );

// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       // "this" is the "current object"
//       console.log(this.age);
//       console.log(user.name)
//     }
  
//   };
  
//   user.sayHi(); 

//   let person = "Prisca"

//   let myMap = new Map([
//       ['Pepper', 900],
//       ['Tomatoes', 544]
//     ]
//   )
//   for (let veg of myMap) {
//     console.log(veg)
//   }
//   console.log( myMap.get('Pepper'))

// let obj = {
//     name: ' Neta',
//     age: 30
// }

// let map = new Map(Object.entries(obj))

// console.log(map.get('age'))


// let set = new Set()

// let pete = {name: 'Pete'}
// let luke = {name: 'Luke'}
// let help = {name: 'Help'}


// set.add(luke)
// set.add(help)
// set.add(pete)
// console.log(set.size)
// for (let user of set) {
//   console.log( user.name)
// }


// function sumSalaries(salaries) {
  
//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//       sum += salary;
//     }
  
//     return sum;
//   }
  
//   let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
  
//   console.log( sumSalaries(salaries) );
  
// let arr = ['Neta', 'Onyema']

// let [firstname, surname] = arr
// console.log(firstname)

let user1 = {
    name: 'John',
    years: 30
}

let {name, years: old, isAdmin = false} = user1;

console.log(isAdmin)

let firstName = "John"
let lastName = "Doe"

 `${firstName} ${lastName}`


// let a = 4;
// let b = 6;
// let result = a + b;
// console.log(`The answer is ${result}`);


function add(a, b) {
  return a + b;
}

let result = add(4, 6);
console.log(result); // Output: 10

// Class recording

function add(num1, num2) {
    if (!num1 || !num2) {
      console.log('I cannot be called')
      throw new SyntaxError('Impossible')
    }

    if (typeof num1 === 'string' || typeof num2 === 'string') {
      console.log('I can only add numbers')

      throw new Error('Impossible')
    }

    let result = num1 + num2;
    return result;
}
