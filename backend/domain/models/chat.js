var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = require('./user').UserSchema;
var MessageSchema = require('./message').MessageSchema;

var ChatSchema = new Schema({
    chatTitle: { type: String, unique: true },
    members: [UserSchema],
    messages: [MessageSchema]
});


ChatSchema.set('toJSON', { getters: true, virtuals: true });

module.exports.Chat = mongoose.model('Chat', ChatSchema);
