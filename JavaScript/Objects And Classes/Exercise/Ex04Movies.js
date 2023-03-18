function solve(input){
    let movies = [];
    for (const line of input) {
        if(line.includes(`addMovie `)){
            let newString = line.replace(`addMovie `, ``);
            let movie = {
                name: newString
            }
            movies.push(movie);
        }
        if(line.includes(`directedBy`)){
            let indexOut = line.indexOf(`directedBy`);
            let movieName = line.substring(0, indexOut).trim();
            let director = line.substring(indexOut + 11, line.length).trim();
            for (const movie of movies) {
                if(movie.name === movieName){
                    movie[`director`] = director;
                }
            }
        }if(line.includes(`onDate`)){
            let indexOut = line.indexOf(`onDate`);
            let movieName = line.substring(0, indexOut).trim();
            let date = line.substring(indexOut + 7, line.length).trim();
            for (const movie of movies) {
                if(movie.name === movieName){
                    movie[`date`] = date;
                }
            }
        }
    }
    for (const movie of movies) {
        if(movie.hasOwnProperty(`director`) && movie.hasOwnProperty(`date`)){
            console.log(JSON.stringify(movie));
        }
    }
}