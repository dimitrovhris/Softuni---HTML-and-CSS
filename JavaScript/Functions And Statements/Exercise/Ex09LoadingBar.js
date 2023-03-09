function solve(number){
    let percents = number / 10;
    if(number!= 100){
    console.log(`${number}% [${`%`.repeat(percents)}${`.`.repeat(10-percents)}]`);
    console.log(`Still loading...`);
    } else{
        console.log(`100% Complete!\n[%%%%%%%%%%]
        `)
    }
}