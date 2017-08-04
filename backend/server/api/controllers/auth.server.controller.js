var mongoose = require('mongoose'),
    config = require('../../../config/config'),
    Utils = require('../../../domain/utils/util'),
    User = require('../../../domain/models/user').User,
    jwt = require('jsonwebtoken');


exports.signup = (req, res) => {
    var user = new User(req.body);

    user.save((err) => {
        if (err) {
            res.status(401).send({
                message: Utils.getErrorMessageFromModel(err)
            });
        } else {
            res.status(200).json(user.user_info);
        }
    });
};

