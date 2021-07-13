const fs = require('fs')

module.exports = [
function (fP, eo){ //read json
    fs.readFile(fP, (err, json)=>{
        if(err){
            console.log("File read failed:", err)
            return
        }
        try {
            const obj = JSON.parse(json)
            return eo && eo(null, obj)
        }
        catch(err){
            return eo && eo(err)
        }
    })
},
function (path, json){ //write Json
        fs.writeFileSync(path, json, err=>{
        if(err){
            console.log(err)
        }else{
            console.log('Sucess')
        }
    })
}
]