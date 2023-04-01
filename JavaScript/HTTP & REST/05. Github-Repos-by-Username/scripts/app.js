function loadRepos() {
	const BASE_URL = 'https://api.github.com/users/';
	let username = document.getElementById('username').value;
	console.log(username);
	let ul = document.getElementById('repos');
	fetch(BASE_URL + '' + username + '/repos')
	.then((res) => res.json())
	.then((repos)=> {
		for (const repo of repos) {
			let li = document.createElement('li');
			let a = document.createElement('a');
			let link = repo.html_url;
			a.href = link;
			a.textContent = repo.full_name;
			li.appendChild(a);
			ul.appendChild(li);
		}
	}
	)

}