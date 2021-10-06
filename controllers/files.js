/* Singleton Pattern */
const fs = require('await-fs');
const app = require('../app');
var AdmZip = require("adm-zip");

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
            console.error("Missing or injured JSON file! || files_to_compile.json")
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

        if (!packageName) packageName = 'package';
        return packageName;
    }

    async unzipPackage() {
        try{
            const zip = new AdmZip( `${ this.getPackageName() }.zip` );
            zip.extractAllTo( 'extracted/', true);
        }catch(err){
            console.error("Missing or injured ZIP file! || Package to minify ");
        }
    }
}

module.exports = files;