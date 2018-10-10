const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const User = require('../../Models/userModel');
const config = require('../../config');


exports.postUser = function (req, res){
    var user = User();
    user.username = req.body.username;
    var password = req.body.password;
    console.log('body', req.body);
    bcrypt.hash(password, null, null, function(err, hash){
        if (err){
            console.log('errr',err);
            res.sendStatus(500)

        }
        else {
            user.password = hash;
            user.save()
                .then(() => {
                    res.sendStatus(201)
                })
                .catch((err) => {
                    console.log('errr',err);
                    res.sendStatus(500)
                })
                // function (err) {
                // if (err) {
                //     console.log('errr',err);
                //     res.sendStatus(500)}
                // else {
                //     res.sendStatus(201)
                // }
            // })
        }
    })
};

exports.getUser = function (req, res) {
    if(!req.headers['x-auth']) {
        return res.sendStatus(401)
    }
    try {
        var auth = jwt.decode(req.headers['x-auth'], config.secretKey)
    } catch (err) {
        return res.sendStatus(401)
    }
    User.findOne({username: auth.username}, function(err, user) {
        if (err) {return res.sendStatus(500)}
        else {
            res.json(user)
        }
    })
};

