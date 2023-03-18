function solve(string){
    let lowerString = string.toLowerCase();
    let split = lowerString.split(` `);
    let wordList = {};
    for (const word of split) {
        if(!wordList.hasOwnProperty(word)){
            wordList[word] = 1;
        } else{
            wordList[word] += 1;
        }
    }
    let validWords = [];
    for (const key in wordList) {
       if(wordList[key] % 2 !== 0){
            validWords.push(key);
       }
    }
    console.log(validWords.join(` `));
}