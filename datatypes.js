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
    // now rand is from  (min-0.5) to (max+0.5)
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
alert( extractCurrencyValue('$120') );
