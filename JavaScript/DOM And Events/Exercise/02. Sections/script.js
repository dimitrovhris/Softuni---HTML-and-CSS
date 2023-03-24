function create(words) {
   for (const word of words) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style = 'display:none';
      div.appendChild(paragraph);
      div.addEventListener('click', visible);
      function visible(e){
         e.target.firstChild.style = "display: block";
      }
      document.getElementById('content').appendChild(div);
   }
   
}