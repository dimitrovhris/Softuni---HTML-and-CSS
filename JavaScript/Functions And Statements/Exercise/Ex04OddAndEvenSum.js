function solve(input){
    let number = input.toString();
    let array = [...number];
    let evenSum = 0;
    let oddSum = 0;
    for(let el of array){
        if(el % 2 == 0){
            evenSum += parseInt(el);
        } else{
            oddSum += parseInt(el);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
