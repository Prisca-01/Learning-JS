console.log("Hello World!")


let mockConsole = {
    log(message) {
        return console.log(message)
    }
}
mockConsole.log("Hello")

function sum(a, b) {
    let sum = a + b;
    console.log(sum);

    return sum

}
sum(6,9)
sum(7,9)



// Callback functions class
function add(num1, num2) {
    // truthy  and falsy values(0, '', false, null, undefined, NaN)
    if (!num1 || !num2) {
      console.log('I cannot be called');
      throw new Error('impossible');
    }
  
    // layer of defence
    if (typeof num1 === 'string' || typeof num2 === 'string') {
      console.log('I can only add numbers');
      // return
      throw new Error('impossible');
    }
  
    // num1 and num2
    // return is return (return the result of the operation and stop the execution of the function)
    let result = num1 + num2;
    return result;
  }
  
  let res = add(1, 9);
  res;


//   Arrow functions
const UpperCase = (name) => name.toUpperCase()

console.log(UpperCase('netam'))
const LowerCase = (name) => name.toLowerCase()
const AddExclamation = (name) => name + '!'
const AddQuestion = (name) => name + '?'


// let arr = [3, 6, 8]
// arr.reduce(function (prev, curr, index, arr) {
//     console.log(prev, curr, index, arr)
// })

let arr = [3, 6, 8];
arr.reduce(function (prev, curr, index, arr) {
    console.log(prev, curr, index, arr);
}, 0); // Here, 0 is the initial value for the accumulator


// array methods
let names = ["abi", "ada"]

let upperCasedNames = names.map(each => each.toUpperCase()) //One liner
upperCasedNames
console.log(upperCasedNames)

let upperCasedNames2 = names.map( each => { //same as above
    return each.toUpperCase()
})
upperCasedNames2
console.log(upperCasedNames2)


// To capitalize first letter
function capitalize(str) {
    let firstLetter = str[0];
    let rest = str.slice(1);
    return `${firstLetter.toUpperCase()}${rest.toLowerCase()}`
}

console.log(capitalize("ada"))

// capitalize can be a callback here
let capitalizedNames = names.map(capitalize);
capitalizedNames


//promises,async & await
// syntax
let promise = new Promise(function(resolve, reject) {
    if (resolve) {
        setTimeout(resolve(), 3000) 
    } else {
        reject()
    }
});

  //2-Delay with a promise

//   The built-in function setTimeout uses callbacks.
//    Create a promise-based alternative.
// The function delay(ms) should return a promise.
//  That promise should resolve after ms 
// milliseconds, so that we can add .then to it, like this:
  function delay(ms) {
    return promise = new Promise(resolve => setTimeout (resolve, ms))
  }
  
  delay(3000).then(() => alert('runs after 3 seconds'));

//   3-Animated circle with promise


let name = undefined;
console.log(Boolean(name)); // undefined
const defaultName = 'default name';
let newName = name || 'qwerty';
// console.log(newName); // adebabacac
let newName2 = name && defaultName;
console.log(newName2); // adebabacac
// undefined or null
name === undefined || name === null ? defaultName : name
let newName3 = name ?? defaultName;
console.log(newName3); // adebabacac
