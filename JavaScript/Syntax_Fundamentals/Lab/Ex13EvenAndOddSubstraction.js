function solve(inputArr){
    let evenSum = 0;
    let oddSum = 0;
    for(let el of inputArr){
        if(el % 2 == 0){
            evenSum+= el;
        } else{
            oddSum += el;
        }
    }
    console.log(evenSum - oddSum);
}