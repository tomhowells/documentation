/**
 * Created by nedc on 11/18/15.
 */

var express = require('express'),
    session = require('express-session'),
    url = require('url'),
    RedisStore = require('connect-redis')(session),
    path = require('path'),
    domain = require('domain'),
    authorization = require('./usermanage/Authorization');


var clientRoot = __dirname;


_createWorkerApp();

function _createWorkerApp(){
    var app = express();
    var port = process.env.PORT || 8080;
    // Session support using RedisToGo
    app.configure(function () {
        var redisToGoDefaultUrl = "redis://redistogo:4070e1b91adbd692981a386b1d66af4a@panga.redistogo.com:9898/";
        var redisToGoUrl = process.env.REDISTOGO_URL || redisToGoDefaultUrl;
        var redisUrlParsed = url.parse(redisToGoUrl);
        //Expected: redisUrlParsed = {"protocol":"redis:","slashes":true,"auth":"redistogo:4070e1b91adbd692981a386b1d66af4a","host":"panga.redistogo.com:9898","port":"9898","hostname":"panga.redistogo.com","hash":null,"search":null,"query":null,"pathname":"/","path":"/","href":"redis://redistogo:4070e1b91adbd692981a386b1d66af4a@panga.redistogo.com:9898/"};
        var redisAuth = redisUrlParsed.auth.split(':');
        app.use(session({
        secret: '720657C2-5890-4F3F-838C-F056C64AE304',
         store: new RedisStore({
             host: redisUrlParsed.hostname,
             port: redisUrlParsed.port,
             pass: redisAuth[1],
             ttl:  1800  //Redis session TTL (expiration) in seconds
         })
        }));
    });
    app.use(authorization);
    app.use(express.static(clientRoot));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(function (req, res, next) {
        var d = domain.create();
        d.on('error', function (err) {
            // handle unexpected exceptions
            res.statusCode = 500;
            try{
                res.json({
                    status: 'error',
                    message: err.message ? err.message : err
                });
            } catch(e){

            }
        });
        d.add(req);
        d.add(res);
        d.run(next);
    });

    require('./usermanage/UserManageCtrl')(app);

    app.get('*', function(request, response){
        response.sendfile(path.resolve(clientRoot, 'index.html'));
    });

    app.use(function (message, req, res, next) {
        // handle normal complete request
        if(message === true){
            return res.json({
                status: 'success'
            });
        }
        // handle normal exceptions
        res.statusCode = 500;
        var errorMessage = {
            status: 'error'
        };
        typeof message === 'string' ? errorMessage.message = message : errorMessage.message = message.message;
        res.json(errorMessage);
    });
    app.listen(port);
    console.info('Processor: %d started, and listened on %d.', process.pid, port);

}
