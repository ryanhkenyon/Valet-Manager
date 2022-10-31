const router = require('../routes/');

module.exports = (app) => {

    app.use('/', router.user)

    app.use('/account', router.account)

    app.use('/api/user', router.user);
    
    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};