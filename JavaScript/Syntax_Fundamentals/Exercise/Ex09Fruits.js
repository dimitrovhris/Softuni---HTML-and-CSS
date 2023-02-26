function solve(fruit, grams, pricePerKg){
    let kg = grams / 1000;
    let totalPrice = kg * pricePerKg;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}