const router = require('express').Router();

router.use('/*', (req,res,next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

router.use('/auth', require('./routes/auth'));

module.exports = router;