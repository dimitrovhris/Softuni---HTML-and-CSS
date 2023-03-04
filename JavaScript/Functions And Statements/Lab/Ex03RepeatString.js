function repeatString(string, count){
    let result = string;
    for(let i = 1; i < count; i++){
        result += string;
    }
    return result;
}