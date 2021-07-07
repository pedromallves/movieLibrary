const movies = require('./database')

const readLine = require('readline-sync')
console.log('Hello, we have a list with some movie information here')
let read = readLine.question('Want to search for a specific genre?Y/N \n')
let readValid = 0
if(read.toLocaleUpperCase() === 'Y' || read.toLocaleUpperCase() === 'N'){
    readValid = 1
}

while(readValid != 1){
    console.log('A valid option was not selected, set a correct option!')
    read = readLine.question('Want to search for a specific genre?Y/N \n')
    if(read.toLocaleUpperCase() === 'Y' || read.toLocaleUpperCase() === 'N'){
        readValid = 1
    }
}
let specificMovies = []
if(read.toLocaleUpperCase() === 'Y'){
    let times = 0
    while(specificMovies.length <=0){
        if(times > 0){
            console.log('\nThe genres entered is invalid, enter a correct genres!')
            times=1
        }
        console.log('These are the available genres:')
        console.log('animation, action, terror, adventure')
        const input = readLine.question('Which genre do you want to choose?\n')
        specificMovies = movies.filter(e => e.genres == input)
        times++
    }
    console.table(specificMovies)
    console.log('*The duration of each movie is in minutes*')
}
else{
    const orderedMovies = movies.sort((a,b)=>a.ano - b.ano)
    console.log('These are the available movies:')
    console.table(orderedMovies)
}