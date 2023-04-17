window.addEventListener('load', solve);

function solve() {
    let tasksSection = document.getElementById('tasks-section');
    let taskId = 0;
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const labelInput = document.getElementById('label');
    const estimationPointsInput = document.getElementById('points');
    const assigneeInput = document.getElementById('assignee');

    const buttonCreate = document.getElementById('create-task-btn');
    buttonCreate.addEventListener('click', create);
    const mainButtonDelete = document.getElementById('delete-task-btn');
    let totalPoints = 0;
    function create(event) {
        let icons = {
            'Feature': '&#8865;',
            'Low Priority Bug': '&#9737;',
            'High Priority Bug': '&#9888;'
        }
        let classes = {
            'Feature': 'feature',
            'Low Priority Bug': 'low-priority',
            'High Priority Bug': 'high-priority'
        }
        let title = titleInput.value;
        let description = descriptionInput.value;
        
        let label = labelInput.value;
        let estimationPoints = estimationPointsInput.value;
        totalPoints += Number(estimationPoints);
        let asignee = assigneeInput.value;
        event.preventDefault();
        taskId++;
        let article = document.createElement('article');
        article.setAttribute('class', 'task-card');
        article.setAttribute('id', `task-${taskId}`);

        let div1 = document.createElement('div');
        div1.setAttribute('class', `task-card-label ${classes[label]}`);
        div1.innerHTML = `${label} ${icons[label]}`;


        let h3 = document.createElement('h3');
        h3.setAttribute('class', 'task-card-title');
        h3.textContent = title;

        let p = document.createElement('p');
        p.setAttribute('class', 'task-card-description');
        p.textContent = description;

        let div2 = document.createElement('div');
        div2.setAttribute('class', 'task-card-points');
        div2.textContent = `Estimated at ${estimationPoints} pts`;

        let div3 = document.createElement('div');
        div3.setAttribute('class', 'task-card-assignee');
        div3.textContent = `Assigned to: ${asignee}`;

        let div4 = document.createElement('div');
        div4.setAttribute('class', 'task-card-actions');
        let buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Delete';
        buttonDelete.addEventListener('click', deleteArticle);
        div4.appendChild(buttonDelete);

        article.appendChild(div1);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(div2);
        article.appendChild(div3);
        article.appendChild(div4);
        
        tasksSection.appendChild(article);

        titleInput.value = '';
        descriptionInput.value = '';
        labelInput.value = '';
        estimationPointsInput.value = '';
        assigneeInput.value = '';

        let pointsField = document.getElementById('total-sprint-points');
        pointsField.textContent = `Total Points ${totalPoints}pts`;
        console.log(document.querySelector("#tasks-section > article"));
        
        function deleteArticle(event) {
            let hiddenInput = document.getElementById('task-id');
            let currentArticle = event.target.parentNode.parentNode;
            let currentId = currentArticle.id;
            hiddenInput.value = currentId;
            let children = Array.from(currentArticle.children);

            titleInput.setAttribute('disabled', true);
            descriptionInput.setAttribute('disabled', true);
            labelInput.setAttribute('disabled', true);
            estimationPointsInput.setAttribute('disabled', true);
            assigneeInput.setAttribute('disabled', true);
            titleInput.value = children[1].textContent;
            descriptionInput.value = children[2].textContent;
            console.log(children[2]);
            let labelDescription = children[0].textContent.split(' ');
            console.log(labelDescription[0]);
            if (labelDescription[0] === 'Low' || labelDescription[0] === 'High') {
                labelInput.value = labelDescription[0] + ' Priority Bug';
                console.log(labelInput.value);
            } else {
                labelInput.value = labelDescription[0];
            }

            estimationPointsInput.value = children[3].textContent.split(' ')[2];
            totalPoints -= Number(estimationPointsInput.value);
            let assigneeData = children[4].textContent.split(' ');
            let name = '';
            for(let i = 2; i < assigneeData.length; i++){
                name += assigneeData[i] + ' ';
            }
            assigneeInput.value = name.trim();
            buttonCreate.setAttribute('disabled', true);
            mainButtonDelete.removeAttribute('disabled');
            mainButtonDelete.addEventListener('click', deleteOfficially);

            function deleteOfficially(event){
                event.preventDefault();
                let hidden = Array.from(event.target.parentNode.parentNode.children)[0];
                let articleToDelete = document.getElementById(hidden.value);
                articleToDelete.remove();
                titleInput.value = '';
                descriptionInput.value = '';
                labelInput.value = '';
                estimationPointsInput.value = '';
                assigneeInput.value = '';
                mainButtonDelete.setAttribute('disabled', true);
                buttonCreate.removeAttribute('disabled');
                let pointsField = document.getElementById('total-sprint-points');
                pointsField.textContent = `Total Points ${totalPoints}pts`;
                titleInput.removeAttribute('disabled');
                descriptionInput.removeAttribute('disabled');
                labelInput.removeAttribute('disabled');
                estimationPointsInput.removeAttribute('disabled');
                assigneeInput.removeAttribute('disabled');
            }
        }
    }
    
}