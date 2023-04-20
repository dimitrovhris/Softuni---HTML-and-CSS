function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    let buttonLoad = document.getElementById('load-course');
    let idNeeded = '';
    buttonLoad.addEventListener('click', loadAll);
    let mainButtonEdit = document.getElementById('edit-course');
    mainButtonEdit.addEventListener('click', editOfficially);
    let buttonAdd = document.getElementById('add-course');
    buttonAdd.addEventListener('click', addCourse);
    async function loadAll(event) {
        event.preventDefault();
        let response = await fetch(BASE_URL);
        let data = await response.json();
        
        let divList = document.getElementById('list');
        divList.innerHTML = '';
        for (let value of Object.values(data)) {
            let divCourse = document.createElement('div');
            divCourse.setAttribute('class', 'container');
            let h2 = document.createElement('h2');
            h2.textContent = value['title'];
            let h3 = document.createElement('h3');
            h3.textContent = value['teacher'];
            let h32 = document.createElement('h3');
            h32.textContent = value['type'];
            let h4 = document.createElement('h4');
            h4.textContent = value['description'];
            divCourse.id = value['_id'];
            let buttonEdit = document.createElement('button');
            buttonEdit.setAttribute('class', 'edit-btn');
            buttonEdit.textContent = 'Edit Course';
            buttonEdit.addEventListener('click', editCourse);
            let buttonFinish = document.createElement('button');
            buttonFinish.setAttribute('class', 'finish-btn');
            buttonFinish.textContent = 'Finish Course';
            buttonFinish.addEventListener('click', deleteCourse);
            divCourse.appendChild(h2);
            divCourse.appendChild(h3);
            divCourse.appendChild(h32);
            divCourse.appendChild(h4);
            divCourse.appendChild(buttonEdit);
            divCourse.appendChild(buttonFinish);
            divList.appendChild(divCourse);

            function editCourse(event) {
                event.preventDefault();
                buttonAdd.setAttribute('disabled', true);
                mainButtonEdit.removeAttribute('disabled');
                let children = Array.from(event.target.parentNode.children);
                let title = children[0].textContent;
                let teacher = children[1].textContent;
                let type = children[2].textContent;
                let description = children[3].textContent;

                let courseNameInput = document.getElementById('course-name');
                let courseTypeInput = document.getElementById('course-type');
                let descriptionInput = document.getElementById('description');
                let teacherNameInput = document.getElementById('teacher-name');

                courseNameInput.value = title;
                courseTypeInput.value = type;
                teacherNameInput.value = teacher;
                descriptionInput.value = description;
                idNeeded = event.target.parentNode.id;
                event.target.parentNode.remove();

            }
            async function deleteCourse(event){
                event.preventDefault();
                let idDelete = event.target.parentNode.id;
                let httpHeaders = {
                    method: 'DELETE'
                }
                await fetch(BASE_URL + idDelete, httpHeaders);
                loadAll(event);
            }
        }
    }
    async function addCourse(event) {
        event.preventDefault();
        let courseNameInput = document.getElementById('course-name');
        let courseTypeInput = document.getElementById('course-type');
        let descriptionInput = document.getElementById('description');
        let teacherNameInput = document.getElementById('teacher-name');

        let courseName = courseNameInput.value;
        let courseType = courseTypeInput.value;
        let description = descriptionInput.value;
        let teacher = teacherNameInput.value;

        courseNameInput.value = '';
        courseTypeInput.value = '';
        descriptionInput.value = '';
        teacherNameInput.value = '';

        httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                'title': courseName,
                'type': courseType,
                'description': description,
                'teacher': teacher
            })
        }
        await fetch(BASE_URL, httpHeaders);
        loadAll(event);
    }
    async function editOfficially(event){
        event.preventDefault();
        console.log(idNeeded);
        let courseNameInputt = document.getElementById('course-name');
        let courseTypeInputt = document.getElementById('course-type');
        let descriptionInputt = document.getElementById('description');
        let teacherNameInputt = document.getElementById('teacher-name');
        console.log(courseNameInputt.value);
        mainButtonEdit.setAttribute('disabled', true);
        buttonAdd.removeAttribute('disabled');
        let httpHeaders = {
            method: 'PUT',
            body: JSON.stringify({
                'title': courseNameInputt.value,
                'type': courseTypeInputt.value,
                'description': descriptionInputt.value,
                'teacher': teacherNameInputt.value,
                '_id': idNeeded
            })
        }
        courseNameInputt.value = '';
        courseTypeInputt.value = '';
        descriptionInputt.value = '';
        teacherNameInputt.value = '';
        await fetch(BASE_URL + idNeeded, httpHeaders);
        loadAll(event);
    }
    
}
solve();