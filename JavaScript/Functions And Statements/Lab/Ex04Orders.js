function order(product, count){
    let price = 0;
    if(product === `coffee`){
        price = 1.50;
    } else if(product === `water`){
        price = 1;
    } else if(product === `coke`){
        price = 1.40;
    } else{
        price = 2;
    }
    console.log((price * count).toFixed(2));
}