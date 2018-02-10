const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());

const localURL='/api/todolist';

const port=6001;
const listController = require('./list_controller');

app.get(localURL,listController.read);
app.post(localURL,listController.create);
app.put(localURL+"/:id",listController.update);
app.delete(localURL+"/:id",listController.delete);


app.listen(port,()=>
console.log('server is listening on ',port));