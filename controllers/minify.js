/* Singleton Pattern */
const app = require('../app');
const minify = require('@node-minify/core');
const cssnano = require('@node-minify/cssnano');

class minify {
    constructor(){
        const instance = this.constructor.instance;
        
        if (instance) {
            return instance;
        }

        this.constructor.instance = this;
    }
}

module.exports = minify;