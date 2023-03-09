function solve(number){
    let numberDividers = [];
    for(let i = 1; i < number; i++){
        if(number % i === 0){
            numberDividers.push(i);
        }
    }
    let sum = 0;
    numberDividers.forEach(num => sum += num);
    if(sum === number){
        console.log(`We have a perfect number!`);
    } else{
        console.log(`It's not so perfect.`);
    }
}