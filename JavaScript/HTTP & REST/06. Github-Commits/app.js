function loadCommits() {
    let username = document.getElementById('username').value;
    let repository = document.getElementById('repo').value;
    const BASE_URL = 'https://api.github.com/repos/';
    let ul = document.getElementById('commits');
    console.log(BASE_URL + username + '/' + repository + '/commits');
    fetch(BASE_URL + username + '/' + repository + '/commits')
        .then((res) => {
            res.json();
        })
        .then((commits) => {
            console.log(commits);
            for(let commit of commits){
                let li = document.createElement('li');
                let authorName = commit.author.name;
                let message = commit.message;
                li.textContent = authorName + ': ' + message;
                ul.appendChild(li);
            }
        })
    
}