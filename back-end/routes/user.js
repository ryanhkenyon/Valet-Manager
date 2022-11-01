const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/get/register', controllers.user.get.register);

router.post('/post/register', controllers.user.post.register);

router.get('/get/account', controllers.account.get.register);

router.post('/post/account', controllers.account.post.register);


// router.post('/login', controllers.user.post.login);

// router.post('/logout', controllers.user.post.logout);

// router.put('/:id', controllers.user.put);

// router.delete('/:id', controllers.user.delete);

module.exports = router;