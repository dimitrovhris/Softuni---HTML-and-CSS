function solve(numbers){
    let sorted = numbers.sort((a, b) => a - b);
    let newArray = [];
    while(sorted.length > 0){
        newArray.push(sorted.shift());
        newArray.push(sorted.pop());
    }
    return newArray;
}
