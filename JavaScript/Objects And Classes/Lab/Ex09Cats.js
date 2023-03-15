function solve(array){
    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    let cats = [];
    for(const line of array){
        let [name, age] = line.split(` `);
        age = Number(age);
        cats.push(new Cat(name, age));
    }
    for(let cat of cats){
        cat.meow();
    }
}