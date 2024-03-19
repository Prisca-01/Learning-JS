fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
  console.log(response.data);
})

if (destination <= 0) {
  return;
}
let sum = 90;
for (let i = 0; i <= destination; i++) {
  sum += i
}