// TODO:
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    let loadButton = document.getElementById('load-board-btn');
    let addButton = document.getElementById('create-task-btn');
    addButton.addEventListener('click', addTask);
    let toToSection = document.getElementById('todo-section');
    let inProgressSection = document.getElementById('in-progress-section');
    let codeReviewSection = document.getElementById('code-review-section');
    let doneSection = document.getElementById('done-section');

    loadButton.addEventListener('click', loadBoard);
    async function loadBoard(event) {
        event.preventDefault();
        toToSection.innerHTML = '';
        inProgressSection.innerHTML = '';
        codeReviewSection.innerHTML = '';
        doneSection.innerHTML = '';
        let response = await fetch(BASE_URL);
        let tasks = await response.json();
        let values = Object.values(tasks);
        console.log(values);
        values.forEach((value) => {
            let li = document.createElement('li');
            li.setAttribute('class', 'task');

            let h3 = document.createElement('h3');
            h3.textContent = value['title'];

            let p = document.createElement('p');
            p.textContent = value['description'];

            li.id = value['_id'];

            let button = document.createElement('button');
            button.addEventListener('click', move);
            li.appendChild(h3);
            li.appendChild(p);
            li.appendChild(button);

            switch (value['status']) {
                case 'ToDo':
                    button.textContent = 'Move to In Progress';
                    toToSection.appendChild(li);
                    break;
                case 'In Progress':
                    button.textContent = 'Move to Code Review';
                    inProgressSection.appendChild(li);
                    break;
                case 'Code Review':
                    button.textContent = 'Move to Done';
                    codeReviewSection.appendChild(li);
                    break;
                case 'Done':
                    button.textContent = 'Close';
                    doneSection.appendChild(li);
                    break;
            }
            async function move(event) {
                event.preventDefault();
                let selectedLi = event.target.parentNode;
                let id = selectedLi.id;
                let nextStaus = '';
                switch (event.target.textContent) {
                    case 'Move to In Progress':
                        nextStaus = 'In Progress';
                        break;
                    case 'Move to Code Review':
                        nextStaus = 'Code Review';
                        break;
                    case 'Move to Done':
                        nextStaus = 'Done';
                        break;
                    case 'Close':
                        let headers = {
                            method: 'DELETE'
                        } 
                        await fetch (BASE_URL + id, headers);
                        loadBoard(event);
                        break;
                }
                if(event.target.textContent != 'Close'){
                let httpHeaders = {
                    method: 'PATCH',
                    body: JSON.stringify({
                        'status': nextStaus
                    })
                }
                await fetch(BASE_URL + id, httpHeaders)
                loadBoard(event);
            }}
        })

    }
    async function addTask(event) {
        event.preventDefault();
        let inputTitle = document.getElementById('title');
        let descriptionInput = document.getElementById('description');

        let title = inputTitle.value;
        let description = descriptionInput.value;
        let status = 'ToDo';

        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                'title': title,
                'description': description,
                'status': status
            })
        }

        await fetch(BASE_URL, httpHeaders);
        inputTitle.value = '';
        descriptionInput.value = '';
        loadBoard(event);
    }
}

attachEvents();