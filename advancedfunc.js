// iterative
function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}
// alert( pow (2, 7));

// recursive
function pow(x, n) {
    if (n ==1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
// alert( pow (7, 2));

// Should be shorter
function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n -1));
}
// THESE TWO FUNCTIONS ABOVE RAISES X TO A NATURAL POWEER OF N


// SUM ALL NUMBERS TILL THE GIVEN ONE
function sumTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// alert(sumTo(4) );

// Recursion
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

// alert( sumTo(100))


// CALCULATE FACTORIAL
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
//     // if (n !== 1) {
//     return n * factorial(n - 1);
// } else {
//     return 1;
// }

}
// alert(factorial(1) )
// alert(factorial(2) )
// alert(factorial(3) )
// alert(factorial(4) )
// alert(factorial(5) )


// FIBRONACCI NUMBERS

// OUTPUT A SINGLE LINKED LIST
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printList(list) {
    alert(list.value);

    if (list.next) {
        printList(list.next);
    }
}

printList(list);

function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }

    alert(list.value);
}

printReverseList(list);
