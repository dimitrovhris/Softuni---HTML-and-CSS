function solve(array){

    let towns = [];
    for (const line of array) {
        let [town, latitude, longitude] = line.split(` | `);
        let townInfo = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        towns.push(townInfo);
    }
    towns.forEach(a => console.log(a));
}