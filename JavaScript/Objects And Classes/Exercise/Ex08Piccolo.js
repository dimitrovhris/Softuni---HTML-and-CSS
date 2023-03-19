function solve(array){
    let cars = [];
    for (const line of array) {
        let split = line.split(`, `);
        let movement = split[0];
        let registration = split[1];
        if(movement === `IN`){
            cars.push(registration);
        } else{
            let indexOut = cars.indexOf(registration);
            cars.splice(indexOut, 1);
        }

    }
    cars.sort((a, b) => {
        let number1 = Number(a.substring(2, 6));
        let number2 = Number(b.substring(2, 6));
        return number1 - number2;
    })
    if(cars.length!==0)
    cars.forEach(car => console.log(car));
    else{
        console.log(`Parking Lot is Empty`)
    }
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);