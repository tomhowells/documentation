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
        var rtg   = url.parse(process.env.REDISTOGO_URL);
        var redisClient = redis.createClient(
            rtg.port,
            rtg.hostname
        );

        redisClient.auth(rtg.auth.split(":")[1]);

        redisClient.on('connect', function(err){
            if (err) return;
            redisClient.get(userName, function(err, value){
                if (err) {
                    return next(err);
                }
                else {
                    if (!value) {
                        res.json({
                            message: 'username-failed'
                        });
                    }
                    else if (value === passwd) {
                        req.session.userData = userName;
                        res.json({
                            signinStatus: 'verified'
                        });
                    }
                    else {
                        res.json({
                            message: 'password-failed'
                        });
                    }
                }
            });
        });

    });
};