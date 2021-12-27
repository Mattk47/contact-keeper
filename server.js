const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
const mongoose = require('mongoose');


connectDB();

app.use(cors());
app.use(express.json())

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

// Serve static assets in production

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    )
}

const PORT = process.env.PORT || 9090;

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) })