var chat = require('../controllers/chat.controller');

module.exports = (app) => {
    app.route('/chat/getAll')
        .get(chat.getAll);

    app.route('/chat/getChatById')
        .post(chat.getChatById);

    app.route('/chat/addNewMessage/:id')
        .put(chat.newMessage);

    app.route('/chat/addMember/:id')
        .put(chat.addMember);

    app.route('/chat/newUser')
        .post(chat.newUser);
};