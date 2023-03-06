function solve(num1, num2, num3){
    let positive = true;
    if(num1 < 0){
        changeBoolean(positive);
    }
    if(num2 < 0){
        changeBoolean(positive);
    }
    if(num3 < 0){
        changeBoolean(positive);
    }
    function changeBoolean(){
        if(positive){
            positive = false;
        } else{
            positive = true;
        }
    }
    if(positive){
        console.log(`Positive`);
    } else{
        console.log(`Negative`);
    }
}
