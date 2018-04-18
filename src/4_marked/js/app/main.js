//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
define(function(require, exports, module) {
    var sub = require('js/app/sub');
    //var txt = require('text!txt/default.txt');
    var md = require('text!txt/default.md');
    var $ = require('jquery');
    var marked = require('marked');
    html = marked(md);
    $('body').html(html);
    //$('body').html('<p>jQuery</p>');
    sub.print(md);
});
