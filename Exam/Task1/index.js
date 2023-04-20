function solve(input) {
    let horsesArray = input[0].split('|');
    for (let i = 1; i < input.length; i++) {
        let commandRow = input[i].split(' ');
        let command = commandRow[0];
        if (command === 'Retake') {
            let firstHorse = commandRow[1];
            let secondHorse = commandRow[2];
            let firstIndex = horsesArray.indexOf(firstHorse);
            let secondIndex = horsesArray.indexOf(secondHorse);
            if (firstIndex < secondIndex) {
                horsesArray[firstIndex] = secondHorse;
                horsesArray[secondIndex] = firstHorse;
                console.log(`${firstHorse} retakes ${secondHorse}.`);
            }
        } else if (command === 'Trouble') {
            let horseName = commandRow[1];
            let index = horsesArray.indexOf(horseName);
            if (index > 0) {
                let indexToSwap = index - 1;
                let horseToSwap = horsesArray[indexToSwap];
                horsesArray[indexToSwap] = horseName;
                horsesArray[index] = horseToSwap;
                console.log(`Trouble for ${horseName} - drops one position.`);
            }
        } else if (command === 'Rage') {
            let horseName = commandRow[1];
            let index = horsesArray.indexOf(horseName);
            if (index < input.length - 2) {
                let nextHorse = horsesArray[index + 1];
                let nextNextHorse = horsesArray[index + 2];
                horsesArray[index + 2] = horseName;
                horsesArray[index + 1] = nextNextHorse;
                horsesArray[index] = nextHorse;
            } else if (index === input.length - 2) {
                let nextHorse = horsesArray[index + 1];
                horsesArray[index] = nextHorse;
                horsesArray[horsesArray.length - 1] = horseName;
            }
            console.log(`${horseName} rages 2 positions ahead.`);
        } else if (command === 'Miracle') {
            let horse = horsesArray[0];
            for (let i = 1; i < horsesArray.length; i++) {
                horsesArray[i - 1] = horsesArray[i];
            }
            horsesArray[horsesArray.length - 1] = horse;
            console.log(`What a miracle - ${horse} becomes first.`);
        } else if (command === 'Finish'){
            console.log(horsesArray.join('->'));
            console.log('The winner is: ' + horsesArray[horsesArray.length - 1]);
            break;
        }
    }
}
solve(
    ['Onyx|Domino|Sugar|Fiona',
        'Trouble Onyx',
        'Retake Onyx Sugar',
        'Rage Domino',
        'Miracle',
        'Finish'])
