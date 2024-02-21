// alert("I'm JavaScript");

let admin;
let person = 'John';

admin = person;
console.log(admin);

// let userName = prompt("What is your name?");
// alert(userName);

// let a = +prompt("firstNumber?", 1);
// let b = +prompt("secondNumber?", 2);

// alert(a + b); // 12

// alert(undefined = NaN);

// if statement task
// let year = prompt('In which year was ECMAScript-2015 specification published?', '');
// if (year == 2015) {
//     alert( "That's correct!" );
//     alert( "You're so smart!" );
// } else{
//     alert( "Olodo!" );
// }

// let name = prompt("What's the 'official' name of JavaScript?", "");
// if (name == "ECMAScript") {
//     alert( "Right!" );
// } else {
//     alert("You don't know? ECMAScript!");
// }

// let value = prompt("Input a number?", 3);

// if (value > 0){
//     alert( 1 );
// } else if (value < 0){
//     alert( -1 );
// } else {
//     alert( 0 );
// }


// let a = 2;
// let b = 2;

// let result =  (a + b < 4) ? 'Below' : 'Over';

// alert(result)

// let message = (login == 'Employee') ? 'Hello' :
// (login == 'Director') ? 'Greetings' :
// (login == '') ? 'No login' :
// '' ;

// if (age >= 14 && age <= 90);

// if (!(age >= 14 && age <= 90));
// if (age < 14 || age > 90);


// MINE
// let who = prompt("Who's there?", "");

// if(value === '' || value === null){
//     alert("Canceled");
// } else if(value === "Admin"){

//     let quest = prompt("Password?", "");

//     if(value === '' || value === null){
//         alert("Canceled");
//     } else if(value === "TheMaster"){
//         alert("Welcome!");
//     } else {
//         alert("Wrong password");
// }
// } else {
//     alert("I don't know you");
// }

// CORRECTION
// let userName = prompt("Who's there?", '');

// if (userName === 'Admin') {

//   let pass = prompt('Password?', '');

//   if (pass === 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }

// Output even numbers from 2-0 using for loop
// for (let i = 0; i <= 10; i++) {

//   if (i % 2 != 0) continue;

//   alert(i);
// }

// for (let i = 2; i <= 10; i++) {

//   if (i % 2 == 0) {

//   alert(i);
//   }
// }

// Replace 'for' with 'while'
// for (let i = 0; i < 3; i++) {
//   alert('number ${i}!');
// }
// Solution
// let i = 0;
// while (i < 3) {
//   alert('number ${i}!');
//   i++;
// }

// let i = 0
// while(i < 10){
//     console.log(i)
//     i++
// }

// for (let i = 0; 1 < 10; i++){
//     console.log(i)
// }
const iterable = [1,2,3,4]
for (const value of iterable) {
    console.log(value)
}
// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

// SWITCH--IF
// let browser = prompt('Browser?', '');

// if (browser ==  'Edge'){
//   alert ("You've got the Edge!");
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'){
//   alert ('Okay we support these browsers too');
// } else {
//   alert('We hope that this page looks ok!');
// }

// let a = +prompt('a?', '');

// switch(a) {
//   case '0':
//     alert('0');
//     break;

//   case '1':
//     alert('1');
//     break;

//   case '2':
//   case '3':
//     alert('2,3');
// }

// FUNCTIONS
// function min(a,b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// function pow(x,n) {
//   let result = x;

//   for(let i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// let x = prompt('x?', '');
// let n = prompt('n?', '');

// if(n < 1){
//   alert('Power ${n} is not supported, use a positive integer');
// } else {
//   alert(pow(x,n));
// }

// ARROW FUNCIONS
// function ask(question, yes, no) {
//   if(confirm(question)) yes();
//   else no();
// }

// ask('Do you agree?',
// ()=> alert('You agreed.'),
// ()=> alert('You canceled the execution.')
// );
// https://mega.nz/folder/D0cTSaiZ#9DeMyehNmqhBepwKqc_bIQ/folder/ug03CQSb


// CODE QUALITY
// function pow(x ,n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", ''); 
// let n = prompt("n?", '');

// if (n <= 0) {
//   alert(`Power ${n} is not supported, 
//     please enter an integer number greater than zero`);
// } else {
//   alert( pow(x, n) );
// }


// OBJECTS
// 1
// let user = {}
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user[name];

// 2
// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// 3
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// alert(sum);

// 4
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
// }

// CHATgpt
// let calculator = {
//   a: null,
//   b: null,
  
//   read() {
//     this.a = parseInt(prompt("Enter the first value: "));
//     this.b = parseInt(prompt("Enter the second value: "));
//   },
  
//   sum() {
//     return this.a + this.b;
//   },
  
//   mul() {
//     return this.a * this.b;
//   }
// };

// calculator.read();
// alert("Sum: " + calculator.sum());
// alert("Multiplication: " + calculator.mul());


// let calculator = {
//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     },

//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     },
// };
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // shows the current step
//       alert( this.step );
//       return this;
//     }
//   };

//   CONSTRUCTOR FUNCTION
// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//       };
    
//       this.sum = function() {
//         return this.a + this.b;
//       };
    
//       this.mul = function() {
//         return this.a * this.b;
//       };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

