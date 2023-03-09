function solve(char1, char2){
    const getFirstCharAsciiCode = (char) => char.charCodeAt(0);
    let firstCharAscii = getFirstCharAsciiCode(char1);
    let secondCharAscii = getFirstCharAsciiCode(char2);

    let minAscii = Math.min(firstCharAscii, secondCharAscii);
    let maxAscii = Math.max(firstCharAscii, secondCharAscii);
    let chars = [];

    for(let i = minAscii + 1; i < maxAscii; i++){
        chars.push(String.fromCharCode(i));
    }
    console.log(chars.join(" "));
}