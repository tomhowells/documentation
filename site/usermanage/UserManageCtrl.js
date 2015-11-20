/**
 * Created by nedc on 11/18/15.
 */
'use strict';

var redis = require('redis');

module.exports = function(app) {

    app.post('/signin', function(req, res, next) {
        var userName = req.body.userName,
            passwd = req.body.passwd;

        var rtg   = require("url").parse(process.env.REDISTOGO_URL);
        var redisClient = require("redis").createClient(
            rtg.port,
            rtg.hostname
        );

        redisClient.auth(rtg.auth.split(":")[1]);

        redisClient.on('connect', function(err){
            if (err) return;
            console.log("connected");
            redisClient.get(userName, function(err, value){
                console.log(err.message);
                console.log("username got client: ",value);
                req.session.userData = userName;
                res.json({
                    signinStatus: 'verified'
                });

            });
        });

/*
        redis.authenticate({
            loginName: userName,
            passwd: passwd
        }, function(err, userData){
            if(err) return next(err);
            req.session.userData = userData;
            res.json({
                signinStatus: 'verified'
            });
        });
*/

    });
};