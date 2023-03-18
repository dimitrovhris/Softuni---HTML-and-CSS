function solve(array){
    let heroes = [];
    for (const line of array) {
        let [name, level, items] = line.split(` / `);
        let hero = {
            name,
            level: Number(level),
            items
        }
        heroes.push(hero);
    }
    let sortedHeroes = heroes
    .sort((heroA, heroB) =>{
        return heroA.level - heroB.level;
    });
    for (const hero of sortedHeroes) {
        console.log(`Hero: ` + hero.name);
        console.log(`level => ` + hero.level);
        console.log(`items => ` + hero.items);
    }
}