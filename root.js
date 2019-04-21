const router = require('express').Router();

router.get('/', (req,res) => {
  res.write(`ip:${req.ip} Hi.`);
  res.end();
})

module.exports = router;