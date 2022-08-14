const express = require('express');

const app = express();

app.get('/', (re, res) => {
    res.json({test: 'It is working'});
});

app.listen(3030, () => console.log('App is running on port 3030...'))