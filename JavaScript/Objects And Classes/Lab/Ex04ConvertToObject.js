function solve(string){
  let person = JSON.parse(string);
  for(let key in person){
    console.log(`${key}: ${person[key]}`);
  }
}
