function solve(n, inputArr){
    let arr = [];
    let output = ``;
    for(let i = 0; i <= n-1; i++){
        arr.push(inputArr[i]);
    }
    for(let j = arr.length-1; j >=0; j--){
        output += arr[j] + ' ';
    }
    console.log(output);
}