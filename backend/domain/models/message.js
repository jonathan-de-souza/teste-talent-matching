var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = require('./user').UserSchema;

var MessageSchema = new Schema({
    text: { type: String },
    user: UserSchema,
    date: {
        type: Date,
        default: new Date(),
    }
});

MessageSchema.set('toJSON', { getters: true, virtuals: true });

module.exports.Message = mongoose.model('Message', MessageSchema);
module.exports.MessageSchema = MessageSchema;
