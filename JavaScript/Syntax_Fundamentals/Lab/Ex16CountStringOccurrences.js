function solve (sentence, word){
    let words = sentence.split(` `);
    let counter = 0;
    for(let el of words){
        if(el === word){
            counter++;
        }
    }
    console.log(counter);
}