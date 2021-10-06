const serve = require('koa-static');
const app = require('./app');

//Controllers
const file = require('./controllers/files');
const minify = require('./controllers/minify');

//Static files
app.use( serve('.') );

//Inits
file_instance = new file();
minify_instance = new minify();

(async function() {
    await minify_instance.start();
})();

app.listen(3000);