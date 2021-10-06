const serve = require('koa-static');
const app = require('./app');

//Controllers
const minify = require('./controllers/minify');

//Static files
app.use( serve('.') );

//Inits
minify_instance = new minify();

(async function() {
    await minify_instance.start();

    console.log('DONE --- CSS/JS SUCCESSFULLY MINIFIED :)')
    process.exit()
})();

app.listen(3000);