export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  // console.log(element.on)
//   element.on('click', () => setCounter(counter + 1))
//   setCounter(0)

// console.log(element.on)

const handler = (event) => {
  //event.stopPropagation() //to stop bubbling from happening
  console.log(event) //event object
  console.log(event.target) //element
  setCounter(counter + 1)
}
// element.on('click', handler, {capture: true})

element.addEventListener('click', handler, { once: true})
setCounter(0)
}