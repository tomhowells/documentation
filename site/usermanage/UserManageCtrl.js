/**
 * Created by nedc on 11/18/15.
 */
'use strict';

var redis = require('redis');
var url = require('url');

module.exports = function(app) {

    app.post('/signin', function(req, res, next) {
        var userName = req.body.userName;
        var passwd = req.body.passwd;

        var redisToGoDefaultUrl = "redis://redistogo:4070e1b91adbd692981a386b1d66af4a@panga.redistogo.com:9898/";
        var redisToGoUrl = process.env.REDISTOGO_URL || redisToGoDefaultUrl;
        var redisUrlParsed = url.parse(redisToGoUrl);
        var redisClient = redis.createClient(
            redisUrlParsed.port,
            redisUrlParsed.hostname
        );
        redisClient.auth(redisUrlParsed.auth.split(":")[1]);

        redisClient.on('connect', function(err){
            if (err) return;
            redisClient.get(userName, function(err, result){
                if (err) {
                    return next(err);
                }
                else {
                    if (!result) {
                        res.status(401).send({ message: "bad username" });
                    }
                    else if (result !== passwd) {
                        res.status(401).send({ message: "bad password" });
                    }
                    else {
                        req.session.userData = userName;
                        res.json({
                            signinStatus: 'verified'
                        });
                    }
                }
            });
        });

    });
};