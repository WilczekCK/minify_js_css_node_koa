/* Singleton Pattern */
const fs = require('await-fs');
const app = require('../app');

class files {
    constructor(){
        const instance = this.constructor.instance;
        
        if (instance) {
            return instance;
        }

        this.constructor.instance = this;
    }

    async toMinify() {
        try{
            let json = await fs.readFile('files_to_compile.json','utf8')
            console.log(json)
        }catch(err){
            console.log("Missing or injured JSON file!")
        }
    }
}

module.exports = files;