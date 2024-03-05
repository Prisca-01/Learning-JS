console.log('Hello from math.js')
// 1st option
exports.add = (a, b) => {
    return a + b;
}

// Option 2
const math = {
    add: (a, b) => {
      return a + b;
    },
    sub: (a, b) => {
      return a - b;
    },
  };

  module.exports = math;