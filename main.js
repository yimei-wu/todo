const todos = [
  { description: "todo1", done: false },
  { description: "todo2", done: false },
  { description: "todo3", done: true },
];

const ul = document.querySelector('ul')
const badges = document.getElementsByClassName('badge')
const todo = badges[0]
const total = badges[1]
render();


function render() {
  todo.textContent = todos.filter(el => el.done === false).length
  total.textContent = todos.length

  ul.innerHTML= ''
  todos.forEach(function(todo) {
    const li = document.createElement('li')
    li.innerHTML = `
    <span></span>
    <input type="checkbox">
    <span><i class="bi bi-trash"></i></span>
    `
    li.querySelector('span').textContent = todo.description
    li.querySelector('input').checked = todo.done
    console.log(todo)
    ul.appendChild(li)
    li.querySelector('i').addEventListener('click', function() {
      
    })

  })

  console.log({todos})
}

const addTask = document.getElementById('add-new-btn')

addTask.addEventListener('click', function() {
  const input = document.querySelector('footer .form-control')
  const description = input.value

  if (description !== '' && !todos.find(todo => todo.description === description)) {
    const newTask = {
      description: description,
      done: false
    }
    todos.push(newTask)
    render()
    input.value = ''
  }
})