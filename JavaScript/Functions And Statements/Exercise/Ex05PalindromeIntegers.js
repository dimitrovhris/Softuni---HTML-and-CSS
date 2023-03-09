function solve(numbers){
    for(let num of numbers){
        console.log(checkPalindrome(num));
    }

    function checkPalindrome(number){
        let stringNum = number.toString();
        let digits = [...stringNum];
        let rightLeft = digits.reverse().join("");
        
        if(stringNum === rightLeft){
            return true;
        }
        return false;
    }
}
