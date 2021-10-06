/* Singleton Pattern */
const app = require('../app');
const files = require('./files');

const minifyDep = require('@node-minify/core');
const cssnanoDep = require('@node-minify/cssnano');

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
            console.log(file);
        }
    }

    async js() {

    }

    async start() {
        await this.css();
    }
}

module.exports = minify;