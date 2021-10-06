/* Singleton Pattern */
const serve = require("koa-static");
const app = require('../app');

class files {
    constructor(){
        const instance = this.constructor.instance;
        
        if (instance) {
            return instance;
        }

        this.constructor.instance = this;
    }

    toMinify() {
        console.log( app.use( serve('../files_to_compile.json') ) );
    }
}

module.exports = files;