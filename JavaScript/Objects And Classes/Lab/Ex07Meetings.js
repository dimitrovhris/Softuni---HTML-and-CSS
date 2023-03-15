function meet(array){
    let schedule = {};
    for(let person of array){
        let [day, name] = person.split(` `);
        if(!(day in schedule)){
        schedule[day] = name;
        console.log(`Scheduled for ${day}`);
        } else{
            console.log(`Conflict on ${day}!`);
        }
    }
    for(let day in schedule){
        console.log(`${day} -> ${schedule[day]}`)
    }
}
meet(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);