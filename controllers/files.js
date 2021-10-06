/* Singleton Pattern */
const fs = require('await-fs');
const app = require('../app');
const StreamZip = require('node-stream-zip');

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

        if (!packageName) packageName = 'package.zip';
        return packageName;
    }

    async unzipPackage() {
        try{
            const zip = new StreamZip.async({ file: `${ this.getPackageName() }` });
            await zip.extract(null, './extracted');
            await zip.close();
        }catch(err){
            console.error("Missing or injured ZIP file! || Package to minify ");
        }
    }
}

module.exports = files;