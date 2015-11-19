/**
 * Created by nedc on 11/18/15.
 */

var express = require('express'),
    session = require('express-session'),
    //RedisStore = require('connect-redis')(session),
    //cookieParser = require('cookie-parser'),
    path = require('path'),
    domain = require('domain'),
    authorization = require('./usermanage/Authorization');


var clientRoot = __dirname;


_createWorkerApp();

function _createWorkerApp(){
    var app = express();
    var port = process.env.PORT || 8080;
    // session support
    //app.use(cookieParser('720657C2-5890-4F3F-838C-F056C64AE304'));
/*
    app.use(session({
        secret: '720657C2-5890-4F3F-838C-F056C64AE304',
        resave: false,
        saveUninitialized: false,
        store: new RedisStore({
            host: "localhost",
            port: 8083,
            ttl:  1800  //  expiring session after xx minutes
        })
    }));
*/
    app.use(authorization);
    //app.use(sessionHolder.startup());
    app.use(express.static(clientRoot));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(function (req, res, next) {
        var d = domain.create();
        d.on('error', function (err) {
            // handle unexpected exceptions
            //logger.error(err.stack || err.message || err);
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
        //logger.debug('PID:%d, handler %s', process.pid, req.url);
        d.run(next);
    });

    //require('./usermanage/UserManageCtrl')(app);

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
