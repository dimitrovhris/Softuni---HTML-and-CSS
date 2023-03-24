function extractText() {
    let items = document.getElementsByTagName(`li`);
    let liArray = Array.from(items);
    let textArea = document.getElementById(`result`);
    for (const item of liArray) {
        textArea.value += item.textContent + `\n`;
    }
}