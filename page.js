var onDocumentLoad = function ( event ) {
// console.log('line 2: ', window.location.pathname);
	var path;
	var section = /\/(Section-1|Section-2|Section-3)\//.exec( window.location.pathname )[ 1 ].toString().split( '.html' )[ 0 ];
	var name = /[\-A-z0-9]+\.html/.exec( window.location.pathname ).toString().split( '.html' )[ 0 ];
// console.log('line 7: ', window.location.pathname, ' - ' , section, ' - ', name);

	if ( section == 'Section-1' ) {
		name = name.replace(/\-/g, ' ');
		path = window.location.pathname.replace( /\ /g, '-' );
// console.log('line 14; ', path);		
// Note: lower case only. Why?
		path = /\/Section-1\/[-a-z0-9\/]+/.exec( path ).toString().substr( 10 );
	} else {
		path = /\/(Section-1|Section-2|Section-3)\/[A-z0-9\/]+/.exec( window.location.pathname )[0].toString().substr( 1 );
// console.log('line 32 ', path, ' - ', section, name);
	}

	var text = document.body.innerHTML;

	text = text.replace(/\[name\]/gi, name);
	text = text.replace(/\[path\]/gi, path);
	text = text.replace(/\[page:(\w+)\]/gi, "[page:$1 $1]" ); // [page:name] to [page:name title]
	text = text.replace(/\[page:(\w+) ([\w|\.]+)\]/gi, "<a href=\"javascript:window.parent.goTo('$1')\" title=\"$1\">$2</a>" ); // [page:name title]
	text = text.replace(/\[link:([\w|\:|\/|\.|\-|\_]+)\]/gi, "[link:$1 $1]" ); // [link:url] to [link:url title]
	text = text.replace(/\[link:([\w|\:|\/|\.|\-|\_]+) ([\w|\:|\/|\.|\-|\_]+)\]/gi, "<a href=\"$1\"  target=\"_blank\">$2</a>" ); // [link:url title]
	text = text.replace(/\*([\w|\d|\"|\-|\(][\w|\d|\ |\-|\/|\+|\-|\(|\)|\=|\,|\.\"]*[\w|\d|\"|\)]|\w)\*/gi, "<strong>$1</strong>" ); // *

	document.body.innerHTML = text;

	// Edit button
	var button = document.createElement( 'div' );
	button.id = 'button';
	button.textContent = 'Edit this page';

	button.addEventListener( 'click', function ( event ) {
		window.open( 'https://github.com/xxx/xxx/blob/dev/docs/' + section + '/' + path + '.html' );
	}, false );

	document.body.appendChild( button );

	// Syntax highlighting
	var styleBase = document.createElement( 'link' );
	styleBase.href = '../../prettify/prettify.css';
	styleBase.rel = 'stylesheet';

	var styleCustom = document.createElement( 'link' );
	styleCustom.href = '../../prettify/threejs.css';
	styleCustom.rel = 'stylesheet';

	document.head.appendChild( styleBase );
	document.head.appendChild( styleCustom );

	var prettify = document.createElement( 'script' );
	prettify.src = '../../prettify/prettify.js';

	prettify.onload = function () {
		var elements = document.getElementsByTagName( 'code' );
		for ( var i = 0; i < elements.length; i ++ ) {
			var e = elements[ i ];
			e.className += ' prettyprint';
		}
		prettyPrint();
	}

	document.head.appendChild( prettify );
};

document.addEventListener( 'DOMContentLoaded', onDocumentLoad, false );
