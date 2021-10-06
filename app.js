//NPMs
const Koa = require('koa');
const app = new Koa();

//Controllers
const file = require('./controllers/files');

//Commands
file_instance = new file();

app.listen(3000);