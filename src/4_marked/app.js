require.config({
    paths: {
        'text': 'js/lib/require/text',
	'jquery': 'js/lib/jquery/jquery-3.3.1.min',
	//'jquery': 'https://code.jquery.com/jquery-3.3.1.min',
	'marked': 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.min',
    }
});
requirejs(['js/app/main.js']);
