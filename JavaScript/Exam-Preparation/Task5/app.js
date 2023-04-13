window.addEventListener('load', solve);

function solve() {
    let totalLikes = 0;
    let addButton = document.getElementById('add-btn');
    addButton.addEventListener('click', addSong);
    function addSong(event) {

        event.preventDefault();
        
        let genreInput = document.getElementById('genre');
        let nameInput = document.getElementById('name');
        let authorInput = document.getElementById('author');
        let dateInput = document.getElementById('date');

        let genre = genreInput.value;
        let name = nameInput.value;
        let author = authorInput.value;
        let date = dateInput.value;
        if(genre !== '' && name !== '' && author !== '' && date !== ''){
        genreInput.value = '';
        nameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';
        let divArray = document.getElementsByClassName('all-hits-container');
        let mainDiv = Array.from(divArray)[0];
        let newDiv = document.createElement('div');
        mainDiv.appendChild(newDiv);

        newDiv.setAttribute('class', 'hits-info');
        let img = document.createElement('img');
        img.src = './static/img/img.png';
        newDiv.appendChild(img);

        let genreHeading = document.createElement('h2');
        genreHeading.textContent = 'Genre: ' + genre;

        let nameHeading = document.createElement('h2');
        nameHeading.textContent = 'Name: ' + name;

        let authorHeading = document.createElement('h2');
        authorHeading.textContent = 'Author: ' + author;

        let dateHeading = document.createElement('h3');
        dateHeading.textContent = 'Date: ' + date;
        newDiv.appendChild(genreHeading);
        newDiv.appendChild(nameHeading);
        newDiv.appendChild(authorHeading);
        newDiv.appendChild(dateHeading);

        let buttonSave = document.createElement('button');
        buttonSave.setAttribute('class', 'save-btn');
        buttonSave.textContent = 'Save song';
        buttonSave.addEventListener('click', saveSong);

        let buttonLike = document.createElement('button');
        buttonLike.setAttribute('class', 'like-btn');
        buttonLike.textContent = 'Like song';
        buttonLike.addEventListener('click', likeSong);

        let buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('class', 'delete-btn');
        buttonDelete.textContent = 'Delete';
        buttonDelete.addEventListener('click', deleteTheSong);

        newDiv.appendChild(buttonSave);
        newDiv.appendChild(buttonLike);
        newDiv.appendChild(buttonDelete);

        function deleteTheSong(event){
            let h1 = document.createElement('h1');
            h1.textContent = 'Collection of songs';
            event.target.parentNode.remove();
    }
        function likeSong() {
            totalLikes += 1;
            let p = document.querySelector('#total-likes > .likes > p');
            p.textContent = 'Total Likes: ' + totalLikes;
            buttonLike.setAttribute('disabled', true);
        }

        function saveSong(event) {
            
            let divSaved = Array.from(document.getElementsByClassName('saved-container'))[0];
            let newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'hits-info');

            let img = document.createElement('img');
            img.src = './static/img/img.png';
            newDiv.appendChild(img);

            let genreHeading = document.createElement('h2');
            genreHeading.textContent = 'Genre: ' + genre;

            let nameHeading = document.createElement('h2');
            nameHeading.textContent = 'Name: ' + name;

            let authorHeading = document.createElement('h2');
            authorHeading.textContent = 'Author: ' + author;

            let dateHeading = document.createElement('h3');
            dateHeading.textContent = 'Date: ' + date;

            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('class', 'delete-btn');
            deleteBtn.addEventListener('click', deleteSong);
            deleteBtn.textContent = 'Delete';
            newDiv.appendChild(genreHeading);
            newDiv.appendChild(nameHeading);
            newDiv.appendChild(authorHeading);
            newDiv.appendChild(dateHeading);
            newDiv.appendChild(deleteBtn);
            divSaved.appendChild(newDiv);

            function deleteSong(event){
                let section = event.target.parentNode;
                section.remove();
            }
            event.target.parentNode.remove();
        }
    }
}
}