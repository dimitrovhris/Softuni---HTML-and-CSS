function solve(number, op1, op2, op3, op4, op5){
    cookNumber(op1);
    cookNumber(op2);
    cookNumber(op3);
    cookNumber(op4);
    cookNumber(op5);
    function chop(){
        number /= 2;
    }
    function dice(){
        number = Math.sqrt(number);
    }
    function spice(){
        number += 1;
    }
    function bake(){
        number *= 3;
    }
    function fillet(){
        number -= 0.2 * number;
    }
    function cookNumber(option){
        if(option === `chop`){
            chop();
        } else if(option === `dice`){
            dice();
        } else if(option === `spice`){
            spice();
        } else if(option === `bake`){
            bake();
        } else{
            fillet();
        }
        console.log(number);
    }
}
