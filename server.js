const express = require('express')

const app = express()

app.get('/', (req, res) => { res.send('welcome to the contact keeper api!') })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) })