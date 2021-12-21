const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
const mongoose = require('mongoose');


app.get('/', (req, res) => { res.send('welcome to the contact keeper api!') })

connectDB();

app.use(cors());
app.use(express.json())

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 9090;

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) })