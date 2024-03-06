// import { test, describe, expect } from 'jest/globals';

function add(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//       throw new Error('a and b must be numbers');
//     }
    return a + b;
  }

//   add()

//   function sub(a, b) {
//     return a - b;
//   }
  console.log(add(1,3))

//   if (sub(1, 3) === -2){
//     console.log('test passed')
//   } else {
//     console.log('test failed')

//   }

// test('it should add 2 numbers', () => {
//     const result = add(3, 7)
//     if (result != 10) {
//         throw new Error('Expected 10 but got ' + result)
//     }
// })


// write your own expect

function expect(actual) {
  return {
    toBe: () => {
      if (actual !== expected) {
        throw new Error(`Expected ${expected} but got ${actual}`);
      }
    },
    toHaveProperty: (prop) => {
      if (!actual.hasOwnProperty(prop)) {
        throw new Error(`Expected ${actual} to have property ${prop}`);
      }
    },
  }
}

  function test(title, callback) {
    try {
        callback();
        console.log(`$(title) passed`)
    } catch (error) {
        console.log(`$(title) failed`)
    }
  }

describe('add', () => {
    test('it should add 2 numbers', () => {
      // assertion
      const obj = {a: 1, b: 2}
      expect(obj).toHaveProperty('c')
      // expect(add(3, 7)).toBe(10);
    });
    // test('only 2 numbers must be passed to the add function', () => {
    //   expect(() => add(3, 7)).toThrow();
    // });
});