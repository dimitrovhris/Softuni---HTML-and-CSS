function solve(array){
  let phoneBook = {};
  for(let data of array){
    let[name, number] = data.split(` `);
    phoneBook[name] = number;
  }
  for(let person in phoneBook){
    console.log(`${person} -> ${phoneBook[person]}`);
  }
}
