var mongoose = require('mongoose'),
    config = require('../../../config/config'),
    Utils = require('../../../domain/utils/util'),
    User = require('../../../domain/models/user').User,
    Chat = require('../../../domain/models/chat').Chat,
    Message = require('../../../domain/models/message').Message;


exports.newUser = (req, res) => {
    User.findOne(req.body, function (err, createdUser) {
        if (err) {
            res.status(200).send({
                message: Utils.getErrorMessageFromModel(err)
            });
        } else {
            if (createdUser) {
                console.log(createdUser);
                res.status(200).send({
                    message: "Nickname já existe"
                });
            } else {
                User.create(req.body, function (err, user) {
                    if (err) {
                        res.status(200).send({
                            message: Utils.getErrorMessageFromModel(err)
                        });
                    } else {
                        res.status(200).send(user);
                    }
                });
            }
            
        }

    });

}

//Get All Chats
exports.getAll = (req, res) => {
    Chat.find({}, function (err, chats) {
        if (err) {
            res.status(200).send({
                message: Utils.getErrorMessageFromModel(err)
            });
        } else {
            res.status(200).send(chats);
        }
    });
};

//Get Chat by Id
exports.getChatById = (req, res) => {
    Chat.findById(req.params.ChatId, function (err, chat) {
        if (err) {
            res.status(200).send({
                message: Utils.getErrorMessageFromModel(err)
            });
        } else {
            res.status(200).send(chat);
        }
    });
};

exports.newMessage = (req, res) => {
    var newMessage = new Message(req.body);

    var isPalindrome = false;

    var words = newMessage.text.split(' ');

    words.forEach(function (word) {
        console.log('------------------------------------------');
        console.log(word);
        console.log('------------------------------------------');
        if ((word == word.split('').reverse().join('')) && word.length > 1) {
            isPalindrome = true;
        }
    });

    if (isPalindrome) {
        res.status(200).send({
            message: 'Não é possível enviar mensagens com um ou mais palíndromos'
        });
        return;
    }

    Message.create(newMessage, (err) => {
        if (err) {
            console.log('------------------------------------------');
            console.log(err);
            console.log('------------------------------------------');
            res.status(200).send({
                message: Utils.getErrorMessageFromModel(err)
            });
        } else {
            Chat.findByIdAndUpdate(req.params.id, { $push: { 'messages': newMessage } }, (err, chat) => {
                if (err) {
                    console.log('------------------------------------------');
                    console.log(err);
                    console.log('------------------------------------------');
                    res.status(200).send({
                        message: Utils.getErrorMessageFromModel(err)
                    });
                } else {
                    res.status(200).json(newMessage);
                }
            });
        }
    });
}

exports.addMember = (req, res) => {
    Chat.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, chat) {
        if (err) {
            res.status(200).send({
                message: Utils.getErrorMessageFromModel(err)
            });
        } else {
            console.log(chat);
            res.status(200).send(chat);
        }
    });
}




