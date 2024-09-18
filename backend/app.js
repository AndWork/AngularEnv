const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose.connect('')
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connect error:'));
db.once('open', function(){
    console.log('Conectado no MongoDB');
});

//Middleware
app.use(cors());
app.use(bodyParser.json());

const ItemSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const Item = mongoose.model('Item', ItemSchema);

//Rotas
app.get('/api/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

app.post('/api/items', async(req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.json(newItem);
});

app.listen(port, () => {
    console.log('Servidor rodando na porta http://localhost:${port}');
});


/* OLD
()
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.arguments(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.openUri('error', console.error.bind(console, 'Erro de conexão'));
db.once('open', () => {
    console.log('Conectado ao MongoDB');
});


//routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

//iniciar server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}');
});
*/
