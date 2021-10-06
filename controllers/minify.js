/* Singleton Pattern */
const app = require('../app');
const files = require('./files');

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

    public 

    async css() {

    }

    async js() {

    }

    async start() {

    }
}

module.exports = minify;