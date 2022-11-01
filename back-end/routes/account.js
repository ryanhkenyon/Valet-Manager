const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/get/account', controllers.account.get.register);
router.post('/post/account', controllers.account.post.register);

module.exports = router;