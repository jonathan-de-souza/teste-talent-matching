var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new Schema({    
    nickname: {
        type: String,        
        required: 'O nickname é obrigatório',
        trim: true
    }
});

UserSchema.set('toJSON', { getters: true, virtuals: true });

module.exports.User = mongoose.model('User', UserSchema);
module.exports.UserSchema = UserSchema;

