/* Singleton Pattern */
const app = require('../app');

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