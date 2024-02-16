// PRIMITIVES

// let str = 'Hello';

// alert( str.toUpperCase() );
// 
// let n = 78.75544;5

// alert( n.toFixed(3) );

// Task
// let str = "Hello";

// str.test = 5;

// alert(str.test);
// Primitives cannot store data


// NUMBERS
// Number.toString(base)
// let num = 255;

// alert( num.toString(16) );
// alert( num.toString(8) );
// alert( num.toString(2) );

// alert( 999999999999999999 );

// let num = +prompt("Enter a number", '');

// will be true unless you enter Infinity, -Infinity or not a number
// alert( isFinite(num) );

// 1
// let a = +prompt('first num', '0');
// let b = +prompt('Second num', '0')

// alert (a + b);

// 2
// function readNumber() {
//     let num;

//     do {
//         num = prompt('Enter a number', '0');
//     } while ( !isFinite(num) );

//     if(num === null || num === '') return null;

//     return +num;

// }

// alert(`Read: ${readNumber()}`);

// 3
// function random(min, max) {
//     return min + Math.random() * (max - min);
// }

// alert( random(1, 5) );
// alert( random(1, 5) );
// alert( random(1, 5) );

// 4
// function randomInteger(min, max) {
//     now rand is from  (min-0.5) to (max+0.5)
//     let rand = min - 0.5 + Math.random() * (max - min + 1);
//     return Math.round(rand);
//   }
  
//   alert( randomInteger(1, 3) );


// STRINGS

// let str = "Come to me, Will you come to me now, You have to come to me now";
// let target = "to";

// let pos = 4;
// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;
    
//     alert ( `Found at ${foundpos}`);
//     pos = foundPos + 1;
// }

// FUNCTION THAT RETURN THE STRING WITH UPPER-CASED FIRST CHARACTER
// function ucFirst(str) {
//     if (!str) return str;

//     return str[0].toUpperCase() + (str.slice(1) );
// }
// alert( ucFirst("prisca") );
// alert( ucFirst("netam") );


// FUNCTION THAT CHECKS FOR SPAM
// function checkSpam(str) {

//     let lowercaseStr = str.toLowerCase();

//     if (lowercaseStr.includes("viagra") || lowercaseStr.includes("xxx")) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//     alert( checkSpam('buy ViAgRA now') );
//     alert( checkSpam('free xxxxx') );
//     alert( checkSpam("innocent rabbit") );


// FUNCTION THAT CHECKS STRING LENGTH 
// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.slice(0, maxlength - 1) + '...';
//     } else {
//         return str;
//     }
// }

// alert( truncate("What I'd like to tell on this topic is:", 20) );

// alert( truncate("Hi everyone!", 20) );


// TO EXTRACT NUMERIC VALUE
function extractCurrencyValue(str) {
    return +str.slice(1);
}
// alert( extractCurrencyValue('$120') );



// ARRAYS
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
//   alert( matrix[2][1] );

//TASKS
// 1
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
// alert( fruits.length ); // 4

// 2
// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

// SO;UTION
// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");

// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// alert( styles.shift() );

// styles.unshift("Rap", "Reggae");
// alert(styles);

// 3
// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// });

// arr[2](); // ?

// 4
// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

// SOLUTION
// function sumInput() {

//     let numbers = [];

//     while(true) {
//         let value = prompt("Enter a number", "0");

//         if (value === NaN || value === "" || !isFinite(value) ) break;

//         numbers.push(+value);
//     }

//     let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert( sumInput() );

// 2nd April
// Will continue in the morning

// ARRAY METHODS
// TASKS
// 1
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.Arr

// function camelize(str) {
//   return str.replace(/-([a-z])/g, function(match, letter) {
//     return letter.toUpperCase();
//   });
// }


// ITERABLES
// const myString = "Hello";

// for (const char of myString) {
//   console.log(char);
// }

// Synbo;.iterator Example
// let range = {
//   from: 1,
//   to: 5
// };

// range[Symbol.iterator] = function() {
//   return {
//     current: this.from,
//     last: this.to,

//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   }
// }

// for (let num of range) {
//   alert(num);
// }

// // 
// let str = '𝒳😂';
// for (let char of str) {
//     alert( char ); // 𝒳, and then 😂😂
// }

// // MAP & SET
// // 1-FILTER UNIQUE ARRAY MEMBERS
// function unique(arr) {
//   return Array.from(new Set(arr))
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) );

// // 2
// // FILTER ANAGRAMS
// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     let sorted = word.toLowerCase().split('').sort().join('');
//     map.set(sorted, word);
//   }

//   return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) );

// // 
// let john = { name: 'John' };

// let array = { john};

// john = null;

// alert( array[0]);
      
// // WEAKSET
// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];
// let readMessages = new Weakset();

// readMessages.add(messages[0]);
// readMessages.add(messages[1]);

// readMessages.add(message[0]);

// alert("Read message 0: " + readMessages.has(messages[0]));

// messages.shift();

// OBJECT.KEY,VALUES,ENTRIES

// 1
// function sumSalaries(salaries) {
  
//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }

//   return sum;
// }

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) );

// 2
// function count(obj) {
//   return Object.keys(obj).length;
// }

// let user = {
//   // name: 'John',
//   age: 30
// };

// alert( count(user) );


// DESTRUCTURING 
// let [firstName = prompt('firstName?'), surname = prompt('surname?') ] = ["Prisca"];

// alert(firstName);
// alert(surname);

// PASSING OBJECTS TO FUNCTIONS- SMART FUNCTION PARAMETERS
// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {

//   alert( `${title} ${width} ${height}`);
//   alert(Items);
// }

// showMenu(options);

// 1

// let user = {
//     name: "John",
//     years: 30
//   };

//   let {name, years: age, isAdmin = false} = user;

//   alert(name);
//   alert(age);
//   alert(isAdmin);

  // 2
//   There is a salaries object:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Create the function topSalary(salaries) that returns the name of the top-paid person.

// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.

// 2 CORRECTION
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

//   function topSalary(salaries) {
    
//     let maxSalary = 0;
//     let maxName = null;

//     for(const [name, salary] of Object.entries(salaries)) {
//       if (maxSalary < salary) {
//         maxSalary = salary;
//         maxName = name;
//       }
//     }

//     return maxName;
//   }
//   alert(maxName);


// DATE AND TIME
// new Date() -To create a new date object

// For current date and time
// let now = new Date();
// alert( now );

// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);

// alert( date );

// Date subtraction used for time measurement
let start = new Date();

for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date();

// alert(`The loop took ${end - start} ms`);


// JSON 
// 1.
// Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};

let user2 = JSON.parse(JSON.stringify(user));

// alert(typeof json);
// alert(user2);

// 2
// Write replacer function to stringify everything, but remove properties that reference meetup:

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

// alert( JSON.stringify(meetup, function replacer(key, value) {
  /* your code */
//   alert(`${key}: ${value}`);
//   return (key == `occupiedBy, meetup`) ? undefined : value;
// }));

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/