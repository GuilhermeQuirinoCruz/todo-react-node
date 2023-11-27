const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Allow cross-domain
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// firebase configs
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert('src/service-account-key.json')
});

app.get('/', (req, res) => {
  res.send('index');
});

const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });