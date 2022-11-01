const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/get/location', controllers.location.get);
router.post('/post/location', controllers.location.post);

module.exports = router;