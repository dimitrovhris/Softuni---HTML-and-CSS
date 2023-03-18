function solve(array){
    let line = array[0];
    let wordsNeeded = line.split(` `);
    let wordList = {};
    for(word of wordsNeeded){
        wordList[word] = 0;
    }
    for(let i = 1; i < array.length; i++){
        if(array[i] in wordList){
            wordList[array[i]] += 1;
        }
    }
    let sortedList = Object.entries(wordList)
    .sort((wordA, wordB) => {
        let [ nameA, countA ] = wordA;
        let [ nameB, countB ] = wordB;
        return countB - countA;
    }
    );

    for (const [word, count] of sortedList) {
        console.log(`${word} - ${count}`);
    }
}
solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
    );