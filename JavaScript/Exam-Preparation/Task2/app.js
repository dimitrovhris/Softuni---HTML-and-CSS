window.addEventListener("load", solve);

function solve() {
  
  let btnPublish = document.getElementById('form-btn');
  btnPublish.addEventListener('click', publishStory);
  function publishStory() {
  let firstInput = document.getElementById('first-name');
  let firstName = document.getElementById('first-name').value;
  let lastName = document.getElementById('last-name').value;
  let age = document.getElementById('age').value;
  let storyTitle = document.getElementById('story-title').value;
  let selectMenu = document.getElementById('genre');
  let storyText = document.getElementById('story').value;
  let previewList = document.getElementById('preview-list');

    btnPublish.setAttribute('disabled', true);

    let li = document.createElement('li');
    li.setAttribute('class', 'story-info');
    previewList.appendChild(li);

    let article = document.createElement('article');
    li.appendChild(article);

    let h4 = document.createElement('h4');
    h4.textContent = firstName + ' ' + lastName;

    let p1 = document.createElement('p');
    p1.textContent = 'Age: ' + age;

    let p2 = document.createElement('p');
    p2.textContent = 'Title: ' + storyTitle;
    let p3 = document.createElement('p');

    let selectedIndex = selectMenu.selectedIndex;
    let selectedOption = selectMenu[selectedIndex];
    let optionText = selectedOption.text;
    p3.textContent = 'Genre: ' + optionText;

    let p4 = document.createElement('p');
    p4.textContent = storyText;

    let btn1 = document.createElement('button');
    btn1.setAttribute('class', 'save-btn');
    btn1.textContent = 'Save Story';

    let btn2 = document.createElement('button');
    btn2.setAttribute('class' , 'edit-btn');
    btn2.textContent = 'Edit Story';

    let btn3 = document.createElement('button');
    btn3.setAttribute('class', 'delete-btn');
    btn3.textContent = 'Delete Story';

    li.appendChild(article);

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);

    li.appendChild(btn1);
    li.appendChild(btn2);
    li.appendChild(btn3);
    
    firstInput.value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('story-title').value = '';
    document.getElementById('story').value = '';
    document.getElementById('genre').vale = '';
    btn2.addEventListener('click', editStory);
    
    function editStory() {
      document.getElementById('first-name').value = firstName;
      document.getElementById('last-name').value = lastName;
      document.getElementById('age').value = age;
      document.getElementById('story-title').value = storyTitle;
      document.getElementById('story').value = storyText;
      previewList.innerHTML = '';
      let preview = document.createElement('h3');
      preview.textContent = 'Preview';
      previewList.appendChild(preview);
      btnPublish.removeAttribute('disabled');
  }
  btn1.addEventListener('click', saveStory);
  function saveStory(){
    let div = document.getElementById('main');
    div.innerHTML = '';
    let h1 = document.createElement('h1');
    h1.textContent = 'Your scary story is saved!';
    div.appendChild(h1);
  }

  btn3.addEventListener('click', deleteStory);
  function deleteStory(){
    previewList.innerHTML = '';
      let preview = document.createElement('h3');
      preview.textContent = 'Preview';
      previewList.appendChild(preview);
      btnPublish.removeAttribute('disabled');
  }

  
}
  

}
