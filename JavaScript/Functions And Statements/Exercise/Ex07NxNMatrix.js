function solve(number){
    new Array(number)
    .fill(new Array(number)
    .fill(number)).forEach
    (row => console.log(row.join(` `)));
}
