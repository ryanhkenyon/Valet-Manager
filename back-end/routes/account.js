const controllers = require('../controllers/');
const router = require('express').Router();


router.post('/account/post', controllers);

module.exports = router;