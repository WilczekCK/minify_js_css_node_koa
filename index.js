const serve = require('koa-static');
const app = require('./app');

//Controllers
const file = require('./controllers/files');
const minify = require('./controllers/minify');

//Static files
app.use( serve('.') );

//Inits
file_instance = new file();

(async function() {
    await file_instance.unzipPackage();
    await file_instance.zipPackage();
    await file_instance.removePlaygroundDir();
})();

app.listen(3000);