/**
 * Created by gary on 12/8/14.
 */

var LANDING_PAGE = '/',
    WHITE_LIST = [
        /^\/login\.html/,
        /^\/css\/.+/,
        /^\/js\/.+/,
        /^\/img\/.+/,
        /^\/signin$/
    ];


module.exports = function(req, res, next){
    var session = req.session;
    if(session == null){
        return next('Unable to initial session storage, please check Redis status.');
    }
    if (!_requestWhiteList(req.url)
        && !session.userData) {
        var loginPage = '/login.html';
        return res.redirect(loginPage);
    } else {
        next();
    }

    function _requestWhiteList(url){
        for(var i = 0;i < WHITE_LIST.length; i++){
            if(WHITE_LIST[i].test(url)){
                return true;
            }
        }
        return false;
    }
};