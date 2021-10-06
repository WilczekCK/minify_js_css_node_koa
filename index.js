const serve = require('koa-static');
const app = require('./app');

//Controllers
const file = require('./controllers/files');

//Static files
app.use( serve('.') );

//Inits
file_instance = new file();

//Handler
file_instance.toMinify();

app.listen(3000);