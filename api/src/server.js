const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const routes = require('./routes');
const { auth } = require('./middlewares/authMiddleware');

const app = express();

mongoose.connect('mongodb://localhost:27017/furniture')
    .then(() => {
        console.log('DB Connected!')
    });

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(auth);

app.use(cors());

app.get('/', (re, res) => {
    res.json({test: 'It is working'});
});

app.use(routes);

app.listen(3030, () => console.log('App is running on port 3030...'))