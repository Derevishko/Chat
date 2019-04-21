const express = require('express');

const app = express();

app.use('/', require('./root'));

app.listen(3000, '0.0.0.0', () => console.log('listen 3000'));
