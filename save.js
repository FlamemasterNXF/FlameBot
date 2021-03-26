const fs = require("fs");

function save() {
    let data = JSON.stringify(player)
    try {
        fs.writeFileSync(`data.json`, JSON.stringify(player))
    } catch (error) {
        console.log(error.message)
    }
}
function load() {
    try{
        player = require("./data.json") // sets player to the object in data.json, this might cause problems later but should work
    }
    catch (error){
        console.log(error)
    }

}
load()
console.log('loaded')
setInterval(save, 1000)
console.log('saved')
