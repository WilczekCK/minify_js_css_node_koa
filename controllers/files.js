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

    async getPathsToModify() {
        try{
            let json = await fs.readFile('files_to_compile.json','utf8')
            return json;
        }catch(err){
            console.log("Missing or injured JSON file!")
        }
    }

    getPackageName() {
        //Get bundle name to pack
        let packageName = undefined;
        process.argv.forEach(function (val, index, array) {
            if( index === 2 ) {
                packageName = val;
            }
        });

        if (!packageName) packageName = 'package.zip';
        return packageName;
    }
}

module.exports = files;