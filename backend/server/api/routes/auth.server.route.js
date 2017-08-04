var auth = require('../controllers/auth.server.controller');

module.exports = (app) => {
    app.route('/auth/signup')
        .post(auth.signup);  

};