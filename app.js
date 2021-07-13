const movies = require('./moviesDatabase.json')
const readLine = require('readline-sync')
const client = require('./clientsDatabase.json')
const contactDatabase = require('./comunicationWithDatabase')

function menu (){
    let  menu = [{option:1, action:"Want to search for a specific genre."},{option:2,action:"Want to search for a specific year"},{option:3,action:"Wanto to see a list of all movies"},{option:4, action:"Submit a movie recommendation"},{option:5, action:"Exit"}]
    console.log("Please enter one of the options:")
    console.table(menu)
    let op = readLine.question('R:')
    return op
}
let option
let newMovie = [{}]
let specificMovies = []
let times
let newa = []
let input1
console.log("Welcome")
do{
    option = menu()
    switch(option){
        case "1":
            times = 0;
            specificMovies = []
            while(specificMovies.length <=0){
                if(times > 0){
                    console.log('\nThe genres entered is invalid, enter a correct genres!');
                    times=1;
                }
                console.log('These are the available genres:');
                console.log('animation, action, terror, adventure');
                let input = readLine.question('Which genre do you want to choose?\n');
                specificMovies = movies.filter(e => e.genres == input);
                times++;
            }
            console.table(specificMovies);
            console.log('*The duration of each movie is in minutes*');
            input1 = readLine.question('Press enter to continue\n')
            break;
        case "2":
            times = 0;
            specificMovies = []
            while(specificMovies.length <=0){
                if(times>0){
                    console.log("\nThe year entered is invalid, please, select a correct year")
                    times=1;
                }
                console.log('These are the years of release of the present films:');
                let moviesAr = []
                movies.forEach((e,i)=>moviesAr[i] = e.year) //tentando retirar os anos repetidos
                newa = [...new Set(moviesAr)]
                newa.forEach(e=>console.log(e))
                let input = readLine.question('Which year do you want to choose?\n');
                specificMovies = movies.filter(e => e.year == input);
                times++;
            }
            console.table(specificMovies);
            console.log('*The duration of each movie is in minutes*');
            input1 = readLine.question('Press enter to continue\n')
            input = 0
            specificMovies = []
            break;
        case "3":
            const orderedMovies = movies.sort((a,b)=>a.ano - b.ano)
            console.log('These are the available movies:')
            console.table(orderedMovies);
            input1 = readLine.question('Press enter to continue\n');
            break;
        case "4":
            quest = readLine.question("Enter the movie name:\n")
            newMovie[0].name = quest
            quest = readLine.question("Enter the year the movie was released:\n")
            newMovie[0].title = quest
            quest =  readLine.question("Enter one of the movie directors:\n")
            newMovie[0].director = quest
            if(client.length >= 0){
            returnMovie = newMovie.concat(client)
            }
            else{
                returnMovie = newMovie
            }
            console.log(returnMovie)
            contactDatabase[1]('./clientsDatabase.json', JSON.stringify(returnMovie))
            break;
}}while(option !=5)