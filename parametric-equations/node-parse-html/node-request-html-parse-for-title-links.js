
	var request = require( "../node_modules/request") ;
	var fs = require( "fs" );
	var fileList = [];
	var fileText = '';
	var base = "../equation-files/";
	var count = 0;
	var count2 = 0;
	content = [];

	fs.readdir( base, function ( error, files ) {
		if ( error ) throw error;
		files.sort();

http://stackoverflow.com/questions/8681519/nodejs-readfile-retrieve-filename
		files.forEach( function ( file ){
//console.log( file );
			var fname = base + file + '/' + file + '.html';
			fs.readFile( fname, 'utf8', function ( error, data ) {
				if ( error ) throw error;
				parseHTML( data, file );
			});
		});

	});

	function parseHTML( data, file ) {
		count++;
		var lines = data.split(/\r\n|\n/);
		var length = lines.length - 1;
		var title = lines[3].replace(/\<(.*?)\>/gi, "" )
		var link = lines[11].replace(/\/\/ /gi, '' )

		var txt = '[ "' + file + '", "' + title + '", "' + link + '", "'
//		var arr = [ file, title, link ];
		var name = requestFile ( link, txt );
//console.log( txt );
	}

	function requestFile ( fname, txt ) {
		request( fname, function ( error, response, body ) {
			if ( error ) {
				console.log( 'xxxxxx', error, txt );
			} else {
				parseRequest( body, txt ) ;
			}
		});
	}

	function parseRequest( data, txt ) {
		count2++;
		var lines = data.split(/\r\n|\n/);
		var length = lines.length - 1;
		var line;

		for ( var i = 5; i < length; i++ ) {
			line = lines[i];
			if ( line.indexOf( ">3." ) > -1 ) {
				line = line.replace( /\s\s\s\s/gi, "" );
				line = line = line.replace( /<(.*?)>/gi, "" );
//				arr.push( line );
//				content.push( arr );
//console.log( txt + line + '" ],' );
				content += txt + line + '" ],\n' ;
				break;
			}
		}
		if ( count2 >= count ) {
			content = '[\n' + content + '\n]\n';
			fs.writeFile( "./file-list.txt", content, function ( error ) {
				if ( error ) throw error;
console.log( content );
		});
		}
		
	}


