// TODO
function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
  const loadButton = document.getElementById('load-button');
  const addButton = document.getElementById('add-button');
  loadButton.addEventListener('click', loadTasks);
  addButton.addEventListener('click', addTask);
  const toDoList = document.getElementById('todo-list');
  async function loadTasks(event) {
    event.preventDefault();
    toDoList.innerHTML = '';
    let response = await fetch(BASE_URL);
    let tasks = await response.json();
    for (const taskData of Object.values(tasks)) {
      let li = document.createElement('li');
      let taskId = taskData['_id'];
      let taskName = taskData['name'];
      let span = document.createElement('span');
      span.textContent = taskName;
      let buttonRemove = document.createElement('button');
      let buttonEdit = document.createElement('button');
      buttonRemove.addEventListener('click', removeTask);
      buttonEdit.addEventListener('click', editTask);
      buttonRemove.textContent = 'Remove';
      buttonEdit.textContent = 'Edit';
      li.appendChild(span);
      li.appendChild(buttonRemove);
      li.appendChild(buttonEdit);
      li.id = taskId;
      toDoList.appendChild(li);
    }
  }
  async function addTask(event){
    event.preventDefault();
    let input = document.getElementById('title');
    let inputTitle = input.value;
    let headers = {
        method: 'POST',
        body: JSON.stringify({
          'name': inputTitle})
    }
    await fetch(BASE_URL, headers);
    input.value = '';
    loadTasks(event);
  }
  async function removeTask(event){
    let taskId = event.target.parentNode.id;
    await fetch (BASE_URL + taskId, {method: 'DELETE'});
    loadTasks(event);
  }
  async function editTask(event){
    let currentLi = event.target.parentNode;
    let taskId = currentLi.id;
    
    let text = currentLi.firstChild.textContent;
    currentLi.innerHTML = '';
    let inputField = document.createElement('input');
    currentLi.appendChild(inputField);
    inputField.value = text;
    
    
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    let submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    currentLi.appendChild(removeButton);
    currentLi.appendChild(submitButton);
    removeButton.addEventListener('click', removeTask);
    submitButton.addEventListener('click', submitTask);
    async function submitTask(){
      let newTask = inputField.value;
    let httpHeaders = {
      method: 'PATCH',
      body: JSON.stringify({
        "name": newTask}
      )
    }
    await fetch(BASE_URL + taskId, httpHeaders);
    loadTasks(event);
  }}
}

attachEvents();
