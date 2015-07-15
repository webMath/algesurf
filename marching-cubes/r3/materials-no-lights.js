	var materialsLibrary = {

		'#Normal' : 'Normal',

		'Normal Default' : {
			'material' : 'new THREE.MeshNormalMaterial( {})',
		},

		'Normal Side 2' : {
			'material' : 'new THREE.MeshNormalMaterial( { side: 2  } )',
		},

		'Normal Side 2 Opacity 0.7' : {
			'material' : 'new THREE.MeshNormalMaterial( { opacity: 0.7, side: 2, transparent: true   } )',
		},

		'Normal Flat' : {
			'material' : 'new THREE.MeshNormalMaterial( { shading: THREE.FlatShading, side: 2  } )',
		},

		'Normal Wireframe' : {
			'material' : 'new THREE.MeshNormalMaterial( { shading: THREE.FlatShading, wireframe: true } )',
		},

		'#Basic' :
			'Basic',

		'Basic Default' : {
			'material' : 'new THREE.MeshBasicMaterial()',
		},

		'Basic Red' : {
			'material' : 'new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.7, side: 2, transparent: true } )',
		},

		'Basic Green' : {
			'material' : 'new THREE.MeshBasicMaterial( { color: 0x00ff00, opacity: 0.7, side: 2, transparent: true } )',
		},

		'Basic Blue' : {
			'material' : 'new THREE.MeshBasicMaterial( { color: 0x0000ff, opacity: 0.7, side: 2, transparent: true } )',
		},

		'#Procedural Textures' : 'textures',

		'red triangles' : {
			'texture' : 'new THREE.Texture( generateTriangles( 1, 0.5, 0 ), THREE.UVMapping )',
			'material' : 'new THREE.MeshBasicMaterial( { side: 2 } )',
		},
		'green triangles' :  {
			'texture' : 'new THREE.Texture( generateTriangles( 0, 1, 0 ), THREE.UVMapping )',
			'material' : 'new THREE.MeshBasicMaterial( { side: 2 } )',
		},
		'blue triangles' :  {
			'texture' : 'new THREE.Texture( generateTriangles( 0, 0.5, 1 ), THREE.UVMapping )',
			'material' : 'new THREE.MeshBasicMaterial( { side: 2 } )',
		},
		'squares' :  {
			'texture' : 'new THREE.Texture( generateSquares(), THREE.UVMapping )',
			'material' : 'new THREE.MeshBasicMaterial( { opacity : 0.7, side: 2, transparent : true } )',
		},
		'random squiggles' :  {
			'texture' : 'new THREE.Texture( generateRandomSquiggles(), THREE.UVMapping )',
			'material' : 'new THREE.MeshBasicMaterial( { side: 2, transparent: true } )',
		},

		'tron' :  {
			'texture' : 'new THREE.Texture( setTron(), THREE.UVMapping )',
			'material' : 'new THREE.MeshBasicMaterial( { color: 0x00ff00, side: 2 } )',
		},

		'random dots' :  {
			'texture' : 'new THREE.Texture( randomDots(), THREE.UVMapping )',
			'material' : 'new THREE.MeshBasicMaterial({ side: 2, transparent: true })',

		},


	};

	function generateTriangles( r, g, b ) {

		var canvas = document.createElement( 'canvas' );
		canvas.width = canvas.height = 256;
		var context = canvas.getContext( '2d' );

		var image = context.getImageData( 0, 0, 256, 256 );
		var x = 0, y = 0, p;

		for ( var i = 0, j = 0; i < image.data.length; i += 4, j++ ) {
			x = j % 256;
			y = x == 0 ? y + 1 : y;
			p = Math.floor( x ^ y );// ^ = xor 

			image.data[ i ] = Math.floor( p * r );
			image.data[ i + 1 ] = Math.floor( p * g );
			image.data[ i + 2 ] = Math.floor( p * b );
			image.data[ i + 3 ] = 255;

		}

		context.putImageData( image, 0, 0 );
		return canvas;
	}    

	function generateSquares() {

		var canvas = document.createElement( 'canvas' );
		canvas.width = canvas.height = 256;

		var context = canvas.getContext( '2d' );
		var image = context.getImageData( 0, 0, 256, 256 );

		var x = 0, y = 0;

		for ( var i = 0, j = 0, l = image.data.length; i < l; i += 4, j ++ ) {

			x = j % 256;
			y = x == 0 ? y + 1 : y;

			image.data[ i ] = 255;
			image.data[ i + 1 ] = 0;
			image.data[ i + 2 ] = 0;
			image.data[ i + 3 ] = Math.floor( x ^ y );

		}

		context.putImageData( image, 0, 0 );

		return canvas;

	}

	function generateRandomSquiggles() {

		var canvas = document.createElement( 'canvas' );
		canvas.width = canvas.height = 512;

		var context = canvas.getContext( '2d' );

		for ( var i = 0; i < 20000; i ++ ) { 

			context.fillStyle = 'hsl( 0, 0%,' + ( Math.random() * 50 + 50 ) + '%)';
			context.beginPath();
			context.arc( Math.random() * canvas.width, Math.random() * canvas.height, Math.random() + 0.15, 0, Math.PI * 2, true );
			context.fill();

		}

		context.globalAlpha = 0.075;
		context.globalCompositeOperation = 'lighter';

		return canvas;

	}

	function randomDots() {

		var canvas = document.createElement( 'canvas' );
		canvas.width = canvas.height = 256;
		var context = canvas.getContext( '2d' );

		var image = context.getImageData( 0, 0, 256, 256 );

		// draw random dots
		for (i = 0; i < 10000; i++) {
			x = Math.random() * canvas.width | 0; // |0 to truncate to Int32
			y = Math.random() * canvas.height | 0;
			r = Math.random() * 256 | 0;
			g = Math.random() * 256 | 0;
			b = Math.random() * 256 | 0;

			index = (x + y * image.width) * 4;
			image.data[index+0] = r;
			image.data[index+1] = g;
			image.data[index+2] = b;
			image.data[index+3] = 255;
		}

		context.putImageData( image, 0, 0 );
		return canvas;
	}


	function setTron() {

		var canvas = document.createElement( 'canvas' );
		canvas.width = canvas.height = 256;
		var context = canvas.getContext( '2d' );

		var image = context.getImageData( 0, 0, 256, 256 );

		pos = 0; // index position into imagedata array

		xoff = canvas.width / 3; // offsets to "center"
		yoff = canvas.height / 3;

		// walk left-to-right, top-to-bottom; it's the
		// same as the ordering in the imagedata array:

		for (y = 0; y < canvas.height; y++) {
			for (x = 0; x < canvas.width; x++) {
				// calculate sine based on distance
				x2 = x - xoff;
				y2 = y - yoff;
				d = Math.sqrt( x2 * x2 + y2 * y2 );
				t = Math.sin( d/6.0 );

				// calculate RGB values based on sine
				r = t * 200;
				g = 125 + t * 80;
				b = 235 + t * 20;

				// set red, green, blue, and alpha:
				image.data[pos++] = Math.max(0,Math.min(255, r));
				image.data[pos++] = Math.max(0,Math.min(255, g));
				image.data[pos++] = Math.max(0,Math.min(255, b));
				image.data[pos++] = 255; // opaque alpha
			}
		}

		context.putImageData( image, 0, 0 );
		return canvas;
	}


// console.log( materialsLibrary );