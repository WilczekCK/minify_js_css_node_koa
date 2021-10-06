//NPMs
const Koa = require('koa');
const app = new Koa();

//Controllers
const file = require('./controllers/files');

//Commands
file_instance = new file();
file_instance2 = new file();

console.log(file_instance === file_instance2);

app.listen(3000);