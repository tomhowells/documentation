/**
 * Created by nedc on 11/18/15.
 */
'use strict';

var redis = require('redis');

module.exports = function(app) {

    app.post('/signin', function(req, res, next) {
        var userName = req.body.userName,
            passwd = req.body.passwd;

        var redisClient = redis.createClient(8083, "127.0.0.1");
        redisClient.on('connect', function(err){
            if (err) return;
            console.log("connected");
            redisClient.get('ned', function(err, value){
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