window.addEventListener('load', solve);

function solve() {
    let task = 0;
    
    const buttonCreate = document.getElementById('create-task-btn');
    const buttonDelete = document.getElementById('delete-task-btn');
    
    buttonCreate.addEventListener('click', create);
    function create(){
        let total = 0;
        let points = document.getElementById('total-sprint-points');
        const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const label = document.getElementById('label');
    const pointsInput = document.getElementById('points');
    const asigneeInput = document.getElementById('assignee');
    const taskSection = document.getElementById('tasks-section');
    total += Number(pointsInput.value);
    console.log(total);
    points.value = ('Total Points ' + total + 'pts');
        task += 1;
        let id = 'task-' + task;
        let article = document.createElement('article');
        article.setAttribute('class', 'task-card');
        article.setAttribute('id', id);

        let div1 = document.createElement('div');
        div1.setAttribute('class', 'task-card-label');
        let selectedIndex = label.selectedIndex;
        let selectedOption = label[selectedIndex];
        let optionText = selectedOption.text;
        if(optionText === 'Feature'){
            div1.textContent = `Feature &#8865`;
            div1.setAttribute('class' , 'task-card-label feature');
        } else if(optionText === 'Low Priority Bug'){
            div1.textContent === 'Low Priority Bug &#9737';
            div1.setAttribute('class' , 'task-card-label low-priority');
        } else{
            div1.textContent === 'High Priority Bug ';
            div1.textContent 
            div1.setAttribute('class' , 'task-card-label high-priority');
        }

        let h3 = document.createElement('h3');
        h3.setAttribute('class', 'task-card-title');
        h3.textContent = titleInput.value;

        let p = document.createElement('p');
        p.setAttribute('class', 'task-card-description');
        p.textContent = descriptionInput.value;

        let div2 = document.createElement('div');
        div2.setAttribute('class', 'task-card-points');
        div2.textContent = pointsInput.value;

        let div4 = document.createElement('div');
        div4.setAttribute('class', 'task-card-actions');
        let button = document.createElement('button');
        button.textContent = 'Delete';
        button.addEventListener('click', deleteAll);
        div4.appendChild(button);

        let div3 = document.createElement('div');
        div3.setAttribute('class', 'task-card-assignee');
        div3.textContent = 'Assigned to: ' + asigneeInput.value;

        article.appendChild(div1);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(div2);
        article.appendChild(div3);
        article.appendChild(div4);
        taskSection.appendChild(article);
        titleInput.value = '';
        descriptionInput.value = '';
        label.value = '';
        pointsInput.value = '';
        asigneeInput.value = '';

        function deleteAll(){
        titleInput.value = h3.textContent;
        descriptionInput.value = p.textContent;
        label.value = optionText;
        pointsInput.value = div2.textContent;
        asigneeInput.value = name;
        total -= Number(pointsInput.value);
        buttonDelete.removeAttribute('disabled');
        buttonCreate.setAttribute('disabled', true);
        let hiddenInput = document.getElementById('task-id');
        let article = this.parentNode.parentNode;
        console.log(article);
        let idt = article.id;
        console.log(idt);
        hiddenInput.setAttribute('value', id);
        }
        buttonDelete.addEventListener('click' ,deletion);
        function deletion(){
            let hiddenInput = document.getElementById('task-id');
            let id = hiddenInput.value;
            const element = document.getElementById(id);
            titleInput.value = '';
        descriptionInput.value = '';
        label.value = '';
        pointsInput.value = '';
        asigneeInput.value = '';
            taskSection.removeChild(taskSection.firstElementChild);
            buttonDelete.setAttribute('disabled', true);
            buttonCreate.removeAttribute('disabled');
            points.textContent = 'Total Points ' + total + 'pts';
        }
    }
}