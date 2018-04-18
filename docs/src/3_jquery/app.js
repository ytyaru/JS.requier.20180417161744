require.config({
    paths: {
        'text': 'js/lib/require/text',
	'jquery': 'js/lib/jquery/jquery-3.3.1.min',
	//'jquery': 'https://code.jquery.com/jquery-3.3.1.min',
    }
});
requirejs(['js/app/main.js']);
