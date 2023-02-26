function solve(num){
    let arr = (num + ``).split(``);
    let nums = arr.map(Number);
    let sum = 0;
    for(let el of nums){
        sum += el;
    }
    console.log(sum);
}
