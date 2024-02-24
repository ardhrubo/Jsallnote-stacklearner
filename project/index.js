const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




