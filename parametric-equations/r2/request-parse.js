// http://stackoverflow.com/questions/11944932/how-to-download-a-file-with-node-js

	var request = require( "../node_modules/request") ;
	var fs = require( "fs" );

	var requestStart = 5;
	var requestFinish = 24;

	var fnameRoot = "http://www.3d-meier.de/tut3/Seite";
	var fname;
	var title;
	var index;

	var prototypeLines;
	var menuItems = "";
	var menuItems2 = [];

	fs.readFile('../source/0-boilerplate.html', 'utf8', function ( error, data ) {
		if ( error ) throw error;
		prototypeLines = data.split(/\r\n|\n/);
	});

	function requestFile ( fname, index ) {
		request( fname, function ( error, response, body ) {
			if ( !error ) {
				parseHTML( body, index ) ;
			} else {
				console.log( error );
			}
		});
	}

	function parseHTML( data, index ) {
//console.log( data );
		var lines = data.split(/\r\n|\n/);
		var length = lines.length - 1;
		var contents;
		var line;
		for ( var i = 0; i < length; i++ ) {
			line = lines[i];

			if ( line.indexOf( ">3." ) > -1 ) {
				line = line.toLowerCase();
				line = line.replace( /\s\s\s\s/gi, "" );
				line = line.replace( /<(.*?)>/gi, "" );
				line = line.replace( /\d(.*?)\s/gi, "" );
				line = line.replace( "uml;", "" );

				line = line.replace( "#180;", "" );					
				line = line.replace( /\&/gi, "" );
				line = line.replace( /\s/gi, "-" );	
				line = line.replace( /(\W)surface/gi, "-surface" );
//				line = line === "boy-surface" ? "boys-surface" : line;
//				line = line === "roman-surface" ? "novel-surface" : line;
				line = line === "plucker#conoid" ? "plucker-conoid" : line;
				line = line === "schnecke" ? "worm" : line;
				fname = line;

				title = fname.replace( "-", " " )
				title = title.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
				prototypeLines[3] = "<title>" + title + "</title>";

				menuItems2.push( [ title, fname ] );
//				menuItems += "<a href=JavaScript:displayPage(\'#./" + fname + "/readme.md\#rm\'); >" + title + "</a>  \n";
			}

			prototypeLines[12] = "// http://www.3d-meier.de/tut3/Seite" + index + ".html";
			contents = [];
			if ( line.indexOf( ">x" ) > -1 || line.indexOf( ">y" ) > -1 || line.indexOf( ">z" ) > -1 ) {
				line = line.replace( /<(.*?)>/gi, "" );

				line = line.replace( /\//gi, " / " );
				line = line.replace( /\+/gi, " + " );

				line = line.replace( /u2/gi, "u * u" );
				line = line.replace( /v2/gi, "v * v" );
				line = line.replace( /u3/gi, "u * u * u" );
				line = line.replace( /v3/gi, "v * v * v" );
				line = line.replace( /\(/gi, "( " );
// 					line = line.replace( /(\W)\)/gi, " )" );

				line = line.replace( /u\)/gi, "u )" );
				line = line.replace( /v\)/gi, "v )" );
				line = line.replace( /i\)/gi, "i )" );

				line = line.replace( /\)\)/gi, ") ) " );
				line = line.replace( /\s\s/gi, " " );

				line = line.replace( /\s=\s/gi, " = scale * ( " );
				line = "\t\t\t" + line + " );";
//console.log( line.substr(0, 5 ) );
				if ( line.substr(3, 1 ) === "x" ) { prototypeLines[52] = line; }
				if ( line.substr(3, 1 ) === "y" ) { prototypeLines[53] = line; }
				if ( line.substr(3, 1 ) === "z" ) { prototypeLines[54] = line; }
			}

		}
console.log( 'fname', fname );


		fs.readdir( "./", function ( error, files ) {
			if ( error ) throw error;
			str = files.join();
			if ( str.indexOf( fname ) < 0 ) {
				fs.mkdir( fname, function ( error ) {
					if ( error ) throw error;
					console.log( 'mkdir' );
					saveFile( fname, prototypeLines, index );
				});
			} else {
				saveFile( fname, prototypeLines, index);
			}
		});
//console.log( contents );
	}

	function saveFile( fname, contents, index ) {
		var destination = fname + "/" + fname + "-proto.html";
		var str = '';
		for (var i = 0, len = contents.length; i < len; i++) {
			str += contents[i] + "\n";
		} 
		fs.writeFile( destination, str, function ( error ) {
			if ( error ) throw error;
//console.log( 'saved!', destination );
		});

		var destination = fname + "/readme.md";

		var readme = 
			title + " Read Me\n" +
			"===\n" +
			"\n" +
			"<iframe src='http://jaanga.github.io/algesurf/parametric-equations/r2/"+ fname + "/" + fname + ".html' width=100% height=500px >\n" +
			"There is an `iframe` here. It is not visible when viewed on github.com/algesurf. To view, please see 'Project Links' below.\n" +
			"</iframe>\n" +
			"[Full Screen]( http://jaanga.github.io/algesurfparametric-equations/r2/" + fname + "/" + fname + ".html )\n" +
			"<br>\n" +
			"## Links \n" +
			"<" + fnameRoot + index + ".html>  \n";
			"";

		fs.writeFile( destination, readme, function ( error ) {
			if ( error ) throw error;
//console.log( 'saved readme!', destination );
		});

		if ( index === requestFinish ) {
			buildMenu();
			fs.writeFile( "readme-menu.md", menuStart + menuItems + menuFinish, function ( error ) {
				if ( error ) throw error;
//console.log( menuItems2.sort() );
			});
//console.log( menuStart + menuItems );
		}
	}

	function buildMenu() {
		menuItems2.sort();
		for (var i = 0, len = menuItems2.length; i < len; i++) {
			menuItems += "<a href=JavaScript:displayPage(\'#./" + menuItems2[i][1] + "/readme.md\#rm\'); >" +  menuItems2[i][0] + "</a>  \n";
		}
	}

	function requestFiles( start, finish ) {
		var fname = fnameRoot + i + "'html";
		for (var i = start; i < finish; i++) {
			fname = fnameRoot + i + ".html";
			requestFile( fname, i );
		} 

	}

	requestFiles( requestStart, requestFinish + 1 );


var menuStart = 
	"[algeSurf](../../index.html ) &raquo;<br>[Repo]( ../index.html ) &raquo;<br>[Parametric Equations]( ./index.html )\n" +
	"===\n" +
	"\n" +
	"<p id=rm >\n" +
	"	<a href=JavaScript:displayPage( '#readme.md\#rm'); >Read Me</a>\n" +
	"</p>\n" +
	" \n" +
	"## Equations\n";

var menuFinish =
	"<br>\n" +
	// "<i class='fa fa-external-link'></i> [Live Demo (latest)]( http://jaanga.github.io/algesurf/parametric-equations/r2/readme-reader.html#./boy-surface/readme.md#rm )  \n" +
	"\n" +
	"<i class='fa fa-github'></i> [Source code on GitHub]( https://github.com/jaanga/algesurf/tree/gh-pages/parametric-equations/r )  \n" +
	"<br>\n" +

	" \n" +
	"<i class='fa fa-copy'></i> [Copyright and license]( https://github.com/jaanga/jaanga.github.io/blob/master/jaanga-copyright-and-mit-license.md )  \n" +
	"";


