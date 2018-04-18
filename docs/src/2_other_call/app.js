//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
/*
define(function(require, exports, module) {
    var sub = require('sub');
    var txt = require('text!../../txt/default.txt');
    sub.print(txt);
});
*/
require.config({
    paths: {
        'text': 'js/lib/require/text'
    }
});
requirejs(['js/app/main.js']);
