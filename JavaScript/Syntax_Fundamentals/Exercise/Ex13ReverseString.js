function solve(array, num){
    for(let i = 1; i <= num; i++){
        let firstNum = array.shift();
        array.push(firstNum);
    }
    let result = ``;
    for(let el of array){
        result += el + ` `;
    }
    console.log(result);
}
