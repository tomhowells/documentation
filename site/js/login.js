/**
 * Created by gary on 12/8/14.
 */
'use strict';
$(function(){
    $('#signIn').bind('click', _login);

    $("input[name='username']").bind('keyup', function(e){
        _validation();
    });

    $("input[name='passwd']").bind('keyup', function(e){
        var isValid = _validation();
        if(isValid && e.which == 13){
            _login();
        }
    });

    // in order to load woff file Immediately
    $('#authenticating_icon').css('visibility', '');
    $('#authenticating_icon').hide();

    $("input[name='username']").focus();

    function _login(){
        var userName = $("input[name='username']").val(),
            passwd = $("input[name='passwd']").val(),
            isKeepSignIn = $('#keepSignIn').prop('checked'),
            requestHash = location.hash.substr(2);
        $('#sign_in_failed').hide();
        $('#sign_in_request_failure').hide();
        switchButtons(true);
        $.post('/signin', {
                userName: userName.trim(),
                passwd: passwd
            }, 'json')
            .done(function(data){
                if(data.signinStatus == 'verified'){
                    location.href = '/index.html';
                }else{
                    console.debug(data);
                    switchButtons(false);
                }
            })
            .fail(function(data){
                var resp = data.responseJSON;
                var message = resp.message;
                switchButtons(false);
                if(message != null){
                    if(message === 'no-permission'){
                        $('#failure_message').text('Insufficient privileges to access Argyle Data System. Please contact your system administrator to find out more.');
                        $('#sign_in_failed').show();
                    }else if (message === 'bad-credentials') {
                        $('#failure_message').text('The user name or password for Argyle Data is incorrect.');
                        $('#sign_in_failed').show();
                    }
                    else {
                        $('#failure_message').text(message);
                        $('#sign_in_failed').show();
                    }
                }else{
                    $('#sign_in_request_failure').show();
                }
            });
    }

    function _validation(){
        var userName = $("input[name='username']").val(),
            passwd = $("input[name='passwd']").val(),
            isValid = true;
        if(userName === ''){
            isValid = false;
        }
        if(passwd === ''){
            isValid = false;
        }
        $('.sign-in-icon').attr('disabled', !isValid);
        return isValid;
    }

    function switchButtons(isRequest){
        if(!!isRequest){
            $('#signIn').attr('disabled', true);
            $('#login_icon').hide();
            $('#authenticating_icon').show();
        }else{
            $('#signIn').attr('disabled', false);
            $('#login_icon').show();
            $('#authenticating_icon').hide();
        }
    }

});