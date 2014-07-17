
	var fs = require( "fs" );
	var fileList = [];
	var fileText = '';
	var count = 0;

	fs.readdir( "../r2/", function ( error, files ) {
		if ( error ) throw error;
		files.sort();
		var file, title;

		for (var i = 0, len = files.length; i < len; i++) {
			var file = files[i];
			if ( file.indexOf("\.") > -1 ) continue;
			fileList.push( file )
			fileText += file + "\n";

			fs.readFile( '../r2/' + file + '/' + file + '.html', 'utf8', function ( error, data ) {
				if ( error ) throw error;
				parseHTML( data );
			});
		} 
		
		fs.writeFile( "./files.md", fileText, function ( error ) {
			if ( error ) throw error;
// console.log( fileText );
		});
	});

	function parseHTML( data ) {
		var lines = data.split(/\r\n|\n/);
		var length = lines.length - 1;
		var contents;
		var line;
		var capture = false;
		line = lines[3].replace(/\<(.*?)\>/gi, "" )
		line = "ASFR.equations." + line.replace( / /gi, "" );
console.log( fileList[ count++] );

		for ( var i = 40; i < length; i++ ) {
			line = lines[i];
			if ( line.indexOf( "var " ) >= 0 && line.indexOf( "var pi" ) < 0 && line.indexOf( "var x," ) < 0 ) {
console.log( line.replace( /\t/gi,"" ) );
			}

			if ( line.indexOf( "u = " ) >= 0 ) {
				capture = true;
			} else if ( line.indexOf( "return new" ) >= 0 ) {
				capture = false;
			}
			if ( capture ) {
console.log( line.replace( /\t/gi,"" ) );
			}

		}

	}