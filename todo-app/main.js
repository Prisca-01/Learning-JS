import '/bling.js'
import '/style.css'

function app() {


let ui = {
  input: $('input'),
  form: $('form'),
}
console.log(ui)

    return mk('div', {id : 'app'}, [
        mk('h1', null, ['Todo App: AltSchool Frontend Version']),
        (ui.form = mk('form', {id: 'form'}, [
          (ui.input = mk('input', {className: 'todo', type: 'text', id: 'todo', placeholder: 'Enter a todo'})),
          mk('button', {type : 'submit', onclick: add}, ['Add Todo']),
      ])),
       (ui.todos = mk('ul', {id: 'todos'}))
    ]);

    function createTodo(todo) {
      let item, text;

        item = mk('li', { className: 'todo-item'}, [
          (text = mk('span', {}, [todo.text]))
        ]);

      return item
    }

    function add(e) {
      e.preventDefault();

      const text = ui?.input.value;

      if (!text) return;

      const todo = { text, completed: false, id: Date.now()};

      ui?.todos.prepend(createTodo(todo));
    }

  }


function render() {
  document.body.prepend(app())
}

render()