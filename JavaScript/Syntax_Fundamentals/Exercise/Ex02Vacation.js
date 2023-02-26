function solve(people, type, day) {
    let pricePerPerson = 0;
    switch(day) {
        case `Friday`:
            if (type === `Students`) {
                pricePerPerson = 8.45;
            } else if(type === `Business`){
                pricePerPerson = 10.90;
            } else{
                pricePerPerson = 15;
            }  
            break;

        case `Saturday`:
            if (type === `Students`) {
                pricePerPerson = 9.80;
            } else if(type === `Business`){
                pricePerPerson = 15.60;
            } else{
                pricePerPerson = 20;
            } 
            break;
        case `Sunday`:
            if (type === `Students`) {
                pricePerPerson = 10.46;
            } else if(type === `Business`){
                pricePerPerson = 16;
            } else{
                pricePerPerson = 22.50;
            }  
            break;
    }
    let totalPrice = people * pricePerPerson;
    if(type === `Students` && people >= 30){
        totalPrice -= 0.15 * totalPrice;
    }
    if(type === `Business` && people >= 100){
        totalPrice -= 10 * pricePerPerson;
    }
    if(type === `Regular` && people >= 10 && people <= 20){
        totalPrice -= 0.05 * totalPrice;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}