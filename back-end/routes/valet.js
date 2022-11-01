const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/get/valet', controllers.valet.get);

router.post('/post/valet', controllers.valet.post);

module.exports = router;