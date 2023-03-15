function solve(array){
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let number = Number(array[0]);
    for(let i = 1; i <= number; i++){
        let line = array[i];
        let [typeList, name, time] = line.split(`_`);
        songs.push(new Song(typeList, name, time));
    }
    let listNeeded = array[array.length - 1];
    songs.filter(a => a.typeList === listNeeded)
    .forEach(a => console.log(a.name));
    if(listNeeded === `all`){
        songs.forEach(a => console.log(a.name));
    }
}
