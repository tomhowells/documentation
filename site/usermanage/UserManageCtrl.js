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
        //var rtg = require("url").parse("redis://redistogo:4070e1b91adbd692981a386b1d66af4a@panga.redistogo.com:9898/");
        var redisClient = require("redis").createClient(
            rtg.port,
            rtg.hostname
        );

        redisClient.auth(rtg.auth.split(":")[1]);

        redisClient.on('connect', function(err){
            if (err) return;
            console.log("connected as:", userName);
            redisClient.get(userName, function(err, value){
                if (err) {
                    return next(err);
                }
                console.log("username got client: ",value);
                req.session.userData = userName;
                res.json({
                    signinStatus: 'verified'
                });

            });
        });

    });
};