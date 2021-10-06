/* Singleton */

class files {
    constructor(){
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }

        this.constructor.instance = this;
    }
}

module.exports = files;