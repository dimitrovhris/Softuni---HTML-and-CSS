function attachEvents() {
    const POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts';
    const COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments';
    const buttonLoad = document.getElementById('btnLoadPosts');
    const buttonView = document.getElementById('btnViewPost');
    const selectMneu = document.getElementById('posts');
    const p = document.getElementById('post-body');
    const h1 = document.getElementById('post-title');
    const comments = document.getElementById('post-comments');
    
    buttonLoad.addEventListener('click', loadPage);
    buttonView.addEventListener('click', commentsPage);
    let posts = [];
    let commentsArray = [];
    class Post {
        constructor(body, title, id){
            this.body = body;
            this.title = title;
            this.id = id;
        }
    }
    async function loadPage(){
        selectMneu.innerHTML = '';
        let response = await fetch(POSTS_URL);
        let data = await response.json();
        let entries = Object.entries(data);
        entries.forEach(entry =>{
            let [key, value] = entry;
            let {body, title, id} = value;
            let option = document.createElement('option');
            option.value = key;
            option.textContent = title;
            selectMneu.appendChild(option);
            let post = new Post(body, title, id);
            posts.push(post);
        })
        console.log(posts);
       
    }
    class Comment {
        constructor(id, postId, text){
            this.id = id;
            this.postId = postId;
            this.text = text;
        }
    }
    
    async function commentsPage(){
        commentsArray = [];
        let selectedIndex = selectMneu.selectedIndex;
        let selectedOption = selectMneu[selectedIndex];
        let heading = selectedOption.text;
        h1.textContent = heading;
        let response = await fetch(COMMENTS_URL);
        let data = await response.json();
        let entries = Object.entries(data);
        entries.forEach(entry => {
            let [key, value] = entry;
            let {id, postId, text} = value;
            let comment = new Comment(id, postId, text);
            commentsArray.push(comment);
        })
        let realPost;
        posts.forEach(post => {
            
            if(post.title === heading){
                realPost = post;
                p.textContent = post.body;
                comments.innerHTML = '';
            }
        })
        commentsArray.forEach((comment) => {
            if(comment.postId === realPost.id){
                let li = document.createElement('li');
                li.textContent = comment.text;
                comments.appendChild(li);
            }
        })
        console.log(commentsArray);
    }
   
}

attachEvents();