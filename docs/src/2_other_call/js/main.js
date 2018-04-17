//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
define(function(require, exports, module) {
    var sub = require('js/sub');
    var txt = require('text!txt/default.txt');
    sub.print(md);
});
