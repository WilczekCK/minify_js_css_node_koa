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

    /**
        Package related
     */

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

    /*
        Zip Related
    */

    async unzipPackage() {
        try{
            const zip = new AdmZip( `${ this.getPackageName() }.zip` );
            zip.extractAllTo( 'extract/', true);
        }catch(err){
            console.error("Missing or injured ZIP file! || Package to UNZIP ");
        }
    }

    async zipPackage() {
        try{
            const zip = new AdmZip();
            zip.addLocalFolder( `extract/${this.getPackageName()}` );
            zip.writeZip(`${ this.getPackageName() }_minified.zip`);
        }catch(err){
            console.error("There is some problem with packing ZIP file || Minified package to ZIP")
        }
    }

    /* 
        Dir Related
    */

    async removePlaygroundDir() {
        try{
             fs.rmdir('extract', {recursive: true, force: true});
        }catch(err){
            console.error("There is some problem with removing the extract directory || Removing playground");
        }
    }
}

module.exports = files;