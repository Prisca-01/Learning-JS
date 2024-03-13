import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import "/bling.js";

// console.log($$('div'))


// document.querySelector("#app").innerHTML 
$('#app').innerHTML= `
  <div name="counter-div" onclick="console.log('div.counter')">
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 onclick = "console.log('clicked h1')">Hello Vite!</h1>
    <input type="text"/>
    <div class="card" my= "danger" onclick="console.log('div.card')">
      <button id="counter" type="button"></button>
      <p>1</p><br/>
    <p>2</p><br/>
    <p>3</p><br/>
    <p>4</p><br/>
    <p>5</p><br/>
    <p>6</p><br/>
    <p>7</p><br/>
    <p>8</p><br/>
    <p>9</p><br/>
    <p>10</p><br/>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Instrument</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Name</th>
          <th>Instrument</th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>John Lennon</td>
          <td>Rhythm Guitar</td>
        </tr>
        <tr>
          <td>Paul McCartney</td>
          <td>Bass</td>
        </tr>
        <tr>
          <td>George Harrison</td>
          <td>Lead Guitar</td>
        </tr>
        <tr>
          <td>Ringo Starr</td>
          <td>Drums</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Instrument</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Name</th>
          <th>Instrument</th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>John Lennon</td>
          <td>Rhythm Guitar</td>
        </tr>
        <tr>
          <td>Paul McCartney</td>
          <td>Bass</td>
        </tr>
        <tr>
          <td>George Harrison</td>
          <td>Lead Guitar</td>
        </tr>
        <tr>
          <td>Ringo Starr</td>
          <td>Drums</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Instrument</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Name</th>
          <th>Instrument</th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>John Lennon</td>
          <td>Rhythm Guitar</td>
        </tr>
        <tr>
          <td>Paul McCartney</td>
          <td>Bass</td>
        </tr>
        <tr>
          <td>George Harrison</td>
          <td>Lead Guitar</td>
        </tr>
        <tr>
          <td>Ringo Starr</td>
          <td>Drums</td>
        </tr>
      </tbody>
    </table>
  </div>`;

setupCounter($("#counter"));

// console.log(table.children)
// console.log(row[0].insertCell)

const table = $('table')
const row = table.rows
// console.log(row)
// console.log(row[0])


// matches - element.matches('css selector') - returns a boolean
const counter = $('#counter')
// console.log(counter.matches('button'))

counter.closest('div').style.backgroundColor='red'

// for the comment in index.html
let content = document.body.firstChild.nextSibling.nodeValue;
// console.log(content)

const newDiv = document.createElement('div')
newDiv.on('click', () => {
  console.log('click')
  newDiv.remove()
})
// attribute
// class
// style

// textContent, innerHTML

newDiv.textContent = "Modifying the DOM"
newDiv.on('click', () => console.log('clicked'))
newDiv.remove

// event

// insertion method - append, prepend, before, after (before, prepend), replaceWith
// newDiv
// allow us to insert (text, element, comment)
// div.before(newDiv) - previousSibling
// app.before(newDiv)
// div.prepend(newDiv) - firstChild
app.prepend(newDiv)
// div.append (newDiv) - lastChild
// app.append (newDiv)
// app.after(newDiv) - nextSibling
app.after(newDiv)

// insertAdjacentHTML/Text/Element(position, element)
// position - beforebegin, afterbegin, beforeend, afterend

app.insertAdjacentHTML('beforebegin', newDiv.outerHTML)
app.insertAdjacentElement('beforebegin', newDiv)
// app.insertAdjacentHTML('afterbegin', '<div>afterbegin</div>')
// app.insertAdjacentHTML('beforeend', '<div>beforeend</div>')
// app.insertAdjacentHTML('afterend', '<div>afterend</div>')


// remove()
// element.remove()

// cloneNode

// DocumentFragment
const ul = document.createElement('ul')

function getListContent() {
  const fragment = new DocumentFragment()

  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    li.textContent = `list item ${i}`
    fragment.append(li)
  }

  return fragment
}

// ul.innerHTML = getListContent()
ul.append(getListContent())

app.append(ul)


// console.log(getComputedStyle($('.card')))
// console.dir($('.card'))

