const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const User = require('../../Models/userModel');
const config = require('.././../config');


exports.postLogin = function(req, res){
    if (req && (!req.body.username || !req.body.password)) {
        // если один или оба параметра запроса опущены,
        // возвращаем 400 - Bad Request
        console.log(req.body);
        return res.sendStatus(400)
    } else {
        var username = req.body.username;
        var password = req.body.password;
        User.findOne({username: username})
        // указываем явно, что нам нужно значение поля password
        // (ибо его выборка отключена в модели)
            .select('password')
            .exec(function(err, user){
                if (err) {
                    console.log(err);
                    return res.sendStatus(500)
                }
                if (!user) {return res.sendStatus(401)}
                bcrypt.compare(password, user.password, function(err, valid){
                    if (err) {
                        console.log(err);
                        return res.sendStatus(500)
                    }
                    if (!valid){
                        console.log(err);
                        return res.sendStatus(401)
                    }
                    var token = jwt.encode({username: username}, config.secretKey);
                    res.send(token)
                })
            })
    }
}