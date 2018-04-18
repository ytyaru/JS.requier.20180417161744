//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
define(function(require, exports, module) {
    var sub = require('js/app/sub');
    var txt = require('text!txt/default.txt');
    var $ = require('jquery');
    $('body').html('<p>jQuery</p>');
    sub.print(txt);
});
