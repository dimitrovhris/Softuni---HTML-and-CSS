function solve(array){
    let addressBook = {};
    for(let line of array){
        let [name, address] = line.split(`:`);
        addressBook[name] = address;
    }
    let sorted = Object.keys(addressBook);
    sorted.sort((a, b) => a.localeCompare(b));
    for(let name of sorted){
        console.log(`${name} -> ${addressBook[name]}`);
    }
}
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);