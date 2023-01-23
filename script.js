// alert("I'm JavaScript");

// let admin;
// let name = 'John';

// admin = name;
// alert(admin);

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
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}