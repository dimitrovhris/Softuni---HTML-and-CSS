function solve(num1, num2){
    let printer = ``;
    let sum = 0;
    for(let i = num1; i <= num2; i++){
        printer += i + ` `;
        sum += i;
    }
    console.log(printer);
    console.log(`Sum: ` + sum);
}