function focused() {
    let inputs = document.getElementsByTagName('input');
    for (const input of inputs) {
        input.addEventListener('focus', focus);
        input.addEventListener(`blur`, blur);
    }
    function focus(e){
        let currentInput = e.target.parentElement;
        currentInput.className = `focused`;
    }
    function blur(e){
        e.target.parentElement.className = ``;
    }
}