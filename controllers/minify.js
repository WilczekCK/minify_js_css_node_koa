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
        const whatwehe = new files();
        console.log( await whatwehe.getPathsToModify() );
    }

    async js() {

    }

    async start() {
        await this.css();
    }
}

module.exports = minify;