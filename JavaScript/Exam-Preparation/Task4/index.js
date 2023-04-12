function solve(input){
    let list = {};
    let groceriesArray = input[0].split('!');

    for(let i = 1; i < input.length - 1; i++){
        let lineSplit = input[i].split(' ');
        let command = lineSplit[0];
        if(command === 'Urgent'){
            let item = lineSplit[1];
            if(!(groceriesArray.includes(item))){
                groceriesArray.unshift(item);
            }
        } else if(command === 'Unnecessary'){
            let item = lineSplit[1];
            if(groceriesArray.includes(item)){
                let index = groceriesArray.indexOf(item);
                groceriesArray.splice(index, 1);
            }
        } else if(command === 'Correct'){
            let oldItem = lineSplit[1];
            let newItem = lineSplit[2];
            let index = groceriesArray[oldItem];
            groceriesArray[index] = newItem;
        } else{
            let item = lineSplit[1];
            if(groceriesArray.includes(item)){
                let index = groceriesArray.indexOf(item);
                groceriesArray.splice(index, 1);
            }
            groceriesArray.push(item);
        }
    }
    console.log(groceriesArray.join(', '))
}
solve( (["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

)