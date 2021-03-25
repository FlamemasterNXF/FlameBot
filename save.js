const fs = require("fs");

function save() {
    let data = JSON.stringify(player)
    try {
        fs.writeFileSync(`data.json`, data)
    } catch (error) {
        console.log(error.message)
    }
}
function load() {
    try{
        JSON.parse(data)
    }
    catch (error){
        console.log(error)
    }

}
load()
console.log('loaded')
setInterval(save, 1000)
console.log('saved')
