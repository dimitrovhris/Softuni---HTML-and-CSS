function toggle() {
        let button = document.getElementsByTagName('span')[0];
        document.getElementById('extra').style = `display: block`;
        if(button.textContent === `More`){
            document.getElementById(`extra`).style = 'display: block';
            button.textContent = `Less`;
        } else{
            document.getElementById(`extra`).style = 'display: none';
            button.textContent = `More`;
        }
}