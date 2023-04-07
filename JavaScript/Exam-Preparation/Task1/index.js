function solve (input){
    let n = Number(input[0]);
    let pieces = {};
    for(let i = 1; i <= n; i++){
        let row = input[i].split('|');
        let [name, composerInput, keyInput] = row;
        pieces[name] = {composer: composerInput, key: keyInput};
    }
    for(let i = n + 1; i < input.length; i++){
        let row = input[i].split('|');
        let command = row[0];
        switch(command){
            case 'Add':
                let [command, name, composer, keyInput] = row;
                if(pieces.hasOwnProperty(name)){
                    console.log(`${name} is already in the collection!`);
                } else{
                    pieces[name] = {composer: composer, key: keyInput};
                    console.log(`${name} by ${composer} in ${keyInput} added to the collection!`);
                }
                break;
            case 'Remove':
                let [commandRemove, nameRemove] = row;
                
                if(pieces.hasOwnProperty(nameRemove)){
                    delete pieces[nameRemove];
                    console.log(`Successfully removed ${nameRemove}!`);
                } else{
                    console.log(`Invalid operation! ${nameRemove} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                let [commandChange, nameChange, keyChange] = row;
                
                if(pieces.hasOwnProperty(nameChange)){
                    for (const [key, value] of Object.entries(pieces)) {
                        if(key === nameChange){
                            value.key = keyChange;
                        }
                    }
                    console.log(`Changed the key of ${nameChange} to ${keyChange}!`);
                } else{
                    console.log(`Invalid operation! ${nameChange} does not exist in the collection.`);
                }
                break;
        }

    }
    for (const piece in pieces) {
            console.log(`${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`);
        }
}

solve(
    
    
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'  
      ]
      
      
  )