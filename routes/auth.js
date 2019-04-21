const router = require('express').Router();
const auth = require('../controllers/Auth');

router.post('/reg', auth.reg);

router.post('/log', auth.log);

module.exports = router;