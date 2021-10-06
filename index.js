const app = require('./app');

//Controllers
const file = require('./controllers/files');

//Inits
file_instance = new file();

//Handler
file_instance.toMinify();

app.listen(3000);