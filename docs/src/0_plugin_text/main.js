/*
require.config({
    paths: {
        'text': './'
    }
});
*/
//require(['sub', 'text!default.md'], function(sub, md) {
require(['sub', 'text!default.txt'], function(sub, md) {
    sub.print(md);
});
