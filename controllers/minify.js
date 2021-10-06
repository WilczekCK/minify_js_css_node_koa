/* Singleton Pattern */
const files = require('./files');

const minifyDep = require('@node-minify/core');
const cssnanoDep = require('@node-minify/cssnano');
const terser = require('@node-minify/terser');

class minify {
    constructor(){
        const instance = this.constructor.instance;
        
        if (instance) {
            return instance;
        }

        this.constructor.instance = this;
    }

    async css() {
        const file_instance = new files();
        const { css } = await file_instance.getPathsToModify();
        
        for await(var file of css){
            await minifyDep({
                compressor: cssnanoDep,
                input:  `extract/${ file_instance.getPackageName() }/${file}.css`,
                output: `extract/${ file_instance.getPackageName() }/${file}.min.css`,
                callback: function(err, min) {}
            })
        }
    }

    async js() {
        const file_instance = new files();
        const { js } = await file_instance.getPathsToModify();
        
        for await(var file of js){
            await minifyDep({
                compressor: terser,
                input:  `extract/${ file_instance.getPackageName() }/${file}.js`,
                output: `extract/${ file_instance.getPackageName() }/${file}.min.js`,
                callback: function(err, min) {}
            })
        }
    }

    async start() {
        const file_instance = new files();
        
        await file_instance.unzipPackage()
        await this.css();
        await this.js();
        await file_instance.zipPackage();
        await file_instance.removePlaygroundDir();
    }
}

module.exports = minify;