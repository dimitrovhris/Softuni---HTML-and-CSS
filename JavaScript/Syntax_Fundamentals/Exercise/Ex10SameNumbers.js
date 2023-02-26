function solve(num){
    let arr = (`` + num).split(``).map(Number);
    let firstEl = arr[0];
    let sum = 0;
    let same = true;
    for(let el of arr){
        if(el !== firstEl){
            same = false;
        }
        sum += el;
    }
    console.log(same);
    console.log(sum);
}
