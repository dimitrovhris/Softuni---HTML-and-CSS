window.addEventListener("load", solve);

function solve() {
    let buttonPublish = document.getElementById('publish-btn');
    buttonPublish.addEventListener('click', publish);

    function publish() {
        let titleInput = document.getElementById('task-title');
        let categoryInput = document.getElementById('task-category');
        let contentInput = document.getElementById('task-content');

        let title = titleInput.value;
        let category = categoryInput.value;
        let content = contentInput.value;

        if(title !== '' && category !== '' && content != ''){
            titleInput.value = '';
            categoryInput.value = '';
            contentInput.value = '';
            let ul = document.getElementById('review-list');
            let li = document.createElement('li');
            li.setAttribute('class', 'rpost');
            let article = document.createElement('article');
            let h4 = document.createElement('h4');
            h4.textContent = title;
            let p1 = document.createElement('p');
            p1.textContent = 'Category: ' + category;
            let p2 =  document.createElement('p');
            p2.textContent = 'Content: ' + content;

            article.appendChild(h4);
            article.appendChild(p1);
            article.appendChild(p2);

            let buttonEdit = document.createElement('button');
            buttonEdit.setAttribute('class', 'action-btn edit');
            buttonEdit.textContent = 'Edit';
            buttonEdit.addEventListener('click', editPost);
            let buttonPost = document.createElement('button');
            buttonPost.setAttribute('class', 'action-btn post');
            buttonPost.textContent = 'Post';
            buttonPost.addEventListener('click', post);
            li.appendChild(article);
            li.appendChild(buttonEdit);
            li.appendChild(buttonPost);
            ul.appendChild(li);

            function editPost(event){
                let liParent = event.target.parentNode;
                let liChildren = Array.from(liParent.children);
                let articleChildren = Array.from(liChildren[0].children);
                let heading = articleChildren[0].textContent;
                let p1 = articleChildren[1].textContent;
                let p2 = articleChildren[2].textContent;
                
                liParent.remove();
                titleInput.value = heading;
                categoryInput.value = p1;
                contentInput.value = p2;
                
            }

            function post(event){
                let liParent = event.target.parentNode;
                
                let liChildren = Array.from(liParent.children);
                let articleChildren = Array.from(liChildren[0].children);
                let heading = articleChildren[0];
                let p1 = articleChildren[1];
                let p2 = articleChildren[2];
                liParent.remove();
                let newUl = document.getElementById('published-list');
                let newLi = document.createElement('li');
                newLi.setAttribute('class', 'rpost');
                let newArticle = document.createElement('article');
                newArticle.appendChild(heading);
                newArticle.appendChild(p1);
                newArticle.appendChild(p2);

                newLi.appendChild(newArticle);
                
                newUl.appendChild(newLi);
                
            }
        }
    }
}