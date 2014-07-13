	JAMA.materials = {} || JAMA.materials;

/*
http://mrdoob.github.io/three.js/docs/#Reference/Materials/MeshPhongMaterial
materials.push( new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } ) );

*/

	JAMA.materials.PhongRandom = {};
	JAMA.materials.PhongRandom.title = "Phong Random";
	JAMA.materials.PhongRandom.category = "Basic";
	JAMA.materials.PhongRandom.set = function() {
		var material = new THREE.MeshPhongMaterial();
		material.title = "Phong Random";
		material.ambient.setHex( 0xffffff * Math.random() );
		material.color.setHex( 0xffffff * Math.random() );
		material.emissive.setHex( 0x333333 * Math.random() );
		material.metal = Math.floor( 2 * Math.random() );
		material.opacity = Math.random().toFixed(2);
		material.side = 2;
		material.shininess = (100 * Math.random()).toFixed(0);
		material.specular.setHex( 0x888888 * Math.random() );
		material.transparent = true;
		material.wireframe = Math.floor( 1.1 * Math.random() );
		material.type = 3;
		return material;
	};

	JAMA.materials.NormalSmooth = {
		title: "Normal Smooth",
		category: "Basic",
		set: function() {
			var material = new THREE.MeshNormalMaterial( { shading: THREE.SmoothShading, side: 2 });
			material.type = 0;
			return material;
		}
	};

	JAMA.materials.NormalFlat = {
		title: "Normal Flat",
		category: "Basic",
		set: function() {
			var material = new THREE.MeshNormalMaterial( { shading: THREE.FlatShading, side: 2 } );
			material.type = 0;
			return material;
		}
	};


	JAMA.materials.BasicFlatRed = {
		title: "Basic Flat Red",
		category: "Basic",
		set: function() {
			material = new THREE.MeshBasicMaterial( { color: 0xff0000, shading: THREE.FlatShading });
			material.type = 1;
			return material;
		}
	};


	JAMA.materials.LambertSmoothRandom = {
		title: "Lambert Smooth Random",
		category: "Basic",
		set: function() {
			var color =  Math.random() * 0xffffff;
			material = new THREE.MeshLambertMaterial( { ambient: color, color: color, emissive: color, shading: THREE.SmoothShading });
			material.type = 2;
			return material;
		}
	};

	JAMA.materials.PhongPlastic = {
		title: "Phong Plastic Red",
		category: "Basic",
		set: function() {
			var material = new THREE.MeshPhongMaterial( { color: 0xff0000, specular: 0x888888, ambient: 0xff0000, shininess: 250 } );
			material.type = 3;
			return material;
		}
	};


	JAMA.materials.PhongFlatBlue = {
		title: "Phong Flat Blue",
		category: "Basic",
		set: function() {
			var material = new THREE.MeshPhongMaterial( { ambient: 0x0000ff, color: 0x0000ff, emissive: 0x000055, specular: 0x550000, shininess: 20, shading: THREE.FlatShading } );
			material.type = 3;
			return material;
		}
	};

	JAMA.materials.PhongFlat2 = {
		title: "Phong Flat Purple",
		category: "Basic",
		set: function() {
			var material =  new THREE.MeshPhongMaterial( { ambient: 0x888800, color: 0xdd00ff, emissive: 0x220033, specular: 0x009900, shininess: 30, shading: THREE.FlatShading });
			material.type = 3;
			return material;
		}
	};

	JAMA.materials.PhongSmooth = {
		title: "Phong Smooth Green",
		category: "Basic",
		set: function() {
			var material = new THREE.MeshPhongMaterial( { 
				ambient: 0x03aa03, color: 0xddffdd, emissive: 0x005500, reflectivity: 0.5, specular: 0x009900, shininess: 10, shading: THREE.SmoothShading });
			material.type = 3;
			return material;
		}
	};

/*
// vertex colors

	JAMA.materials.PhongVertexColors = function( ) {
		var scale;
		var geom = JATH.selectedObject.geometry;
		//geom.computeBoundingBox();
		//yMin = geom.boundingBox.min.y;
		//yMax = geom.boundingBox.max.y;
		yRange = scale; // yMax - yMin;
		var color, point, face, numberOfSides, vertexIndex;

		for ( var i = 0; i < geom.vertices.length; i++ ) {
			point = geom.vertices[ i ];
			color = new THREE.Color( 0x0000ff );
			color.setHSL( 0.7 * (scale - point.y) / scale, 1, 0.5 );
			geom.colors[i] = color; // use this array for convenience
		}

		var faceIndices = [ 'a', 'b', 'c', 'd' ];
		for ( i = 0; i < geom.faces.length; i++ ) {
			face = geom.faces[ i ];
			numberOfSides = ( face instanceof THREE.Face3 ) ? 3 : 4;
			for ( var j = 0; j < numberOfSides; j++ ) {
				vertexIndex = face[ faceIndices[ j ] ];
				face.vertexColors[ j ] = geom.colors[ vertexIndex ];
			}
		}

		var material = new THREE.MeshBasicMaterial( { color: 0xff0000, vertexColors: THREE.VertexColors  } );
		material.title = "xxx";
		material.type = 3;
		return material;
	};

// textures

	JAMA.materials.PhongTextureRandom = function() {
		var texture = new THREE.ImageUtils.loadTexture( '../../../textures/pure-white.png' );
		var material = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture, transparent: true } );
		material.title = "xxx";
		material.type = 3;
		material.ambient.setHex( 0xffffff * Math.random() );
		material.color.setHex( 0xffffff * Math.random() );
		material.emissive.setHex( 0x333333 * Math.random() );
		material.metal = Math.floor( 2 * Math.random() );
		material.opacity = Math.random().toFixed(2);
		material.side = 2;
		material.shininess = (100 * Math.random()).toFixed(0);
		material.specular.setHex( 0x888888 * Math.random() );
		material.transparent = true;
//		material.wireframe = Math.floor( 1.3 * Math.random() );
		return material;
	};
*/

	JAMA.materials.PhongPureWhiteRandom = {
		title: "Phong Pure White Random",
		set: function() {
			var p = JAMA.basePath + 'textures/';
			var urls = [ p + 'pure-white.png', p + 'pure-white.png', p + 'pure-white.png', p + 'pure-white.png', p + 'pure-white.png', p + 'pure-white.png' ];
			var reflectionCube = THREE.ImageUtils.loadTextureCube( urls );
			reflectionCube.format = THREE.RGBFormat;
			var refractionCube = new THREE.Texture( reflectionCube.image, new THREE.CubeRefractionMapping() );

			material = new THREE.MeshPhongMaterial( {
				color: 0xffffff * Math.random(), 
				ambient: 0xffffff * Math.random(),
//				envMap: refractionCube, refractionRatio: 0.85,
				envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3, metal: true,
				opacity: 0.9,
				specular: 0xffffff * Math.random(),
				shininess: 100,
				side: THREE.DoubleSide,
				transparent: true
			} );
			material.type = 3;
			return material;
		}
	};

	JAMA.materials.PhongPureWhiteRefLect = {
		title: "Phong Pure White Reflect",
		set: function() {
			var p = JAMA.basePath + 'textures/';
			var urls = [ p + 'pure-white.png', p + 'pure-white.png', p + 'pure-white.png', p + 'pure-white.png', p + 'pure-white.png', p + 'pure-white.png' ];

			var reflectionCube = THREE.ImageUtils.loadTextureCube( urls );
			reflectionCube.format = THREE.RGBFormat;

			var refractionCube = new THREE.Texture( reflectionCube.image, new THREE.CubeRefractionMapping() );
			refractionCube.format = THREE.RGBFormat;

			material = new THREE.MeshPhongMaterial( {   
				color: 'gold', 
				ambient: 'gold',
//				emissive: 0x222222,

//				envMap: refractionCube, refractionRatio: 0.85,
				envMap: reflectionCube, combine: THREE.MixOperation, 
				metal: true,
				reflectivity: 0.3,
				shininess: 50,
				specular: 0xffffff

			});
			material.type = 3;
			return material;
		}
	};

	JAMA.materials.PhongGridded = {
		title: "Phong Gridded",
		set: function() {
			var p = JAMA.basePath + 'textures/';
			var urls = [ p + 'square.png', p + 'square.png', p + 'square.png', p + 'square.png', p + 'square.png', p + 'square.png' ];
			var reflectionCube = THREE.ImageUtils.loadTextureCube( urls );
			reflectionCube.format = THREE.RGBFormat;
			var refractionCube = new THREE.Texture( reflectionCube.image, new THREE.CubeRefractionMapping() );

			material = new THREE.MeshPhongMaterial( {
				color: 0xffffff * Math.random(), 
				ambient: 0xffffff * Math.random(),
//				envMap: refractionCube, refractionRatio: 0.85,
				envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3, metal: true,
				opacity: 0.9,
				specular: 0xffffff * Math.random(),
				shininess: 50,
				side: THREE.DoubleSide,
				transparent: true
			} );
			material.type = 3;
			return material;
		}
	};

	JAMA.materials.PhongUVGrid = {
		title: "Phong UV Grid",
		set: function() {
			var p = JAMA.basePath + 'textures/';
			var urls = [ p + 'ash_uvgrid01.jpg', p + 'ash_uvgrid01.jpg', p + 'ash_uvgrid01.jpg', p + 'ash_uvgrid01.jpg', p + 'ash_uvgrid01.jpg', p + 'ash_uvgrid01.jpg' ];
			var reflectionCube = THREE.ImageUtils.loadTextureCube( urls );
			reflectionCube.format = THREE.RGBFormat;

			var refractionCube = new THREE.Texture( reflectionCube.image, new THREE.CubeRefractionMapping() );
			refractionCube.format = THREE.RGBFormat;

			material = new THREE.MeshPhongMaterial( {
				color: 0xffffff * Math.random(), 
				ambient: 0xffffff * Math.random(),
				envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3, metal: true,
//				envMap: refractionCube, refractionRatio: 0.85,
//				opacity: 0.9,
				specular: 0xffffff * Math.random(),
				shininess: 50,
				side: THREE.DoubleSide,
				transparent: true
			} );
			material.type = 3;
			return material;
		}
	};

	JAMA.materials.PhongLavatile = {
		title: "Phong Lavatile",
		set: function() {
			var p = JAMA.basePath + 'textures/';
			var urls = [ p + 'lavatile.jpg', p + 'lavatile.jpg', p + 'lavatile.jpg', p + 'lavatile.jpg', p + 'lavatile.jpg', p + 'lavatile.jpg' ];
			// var texture = THREE.ImageUtils.loadTextureCube( urls, new THREE.CubeRefractionMapping() );
			var reflectionCube = THREE.ImageUtils.loadTextureCube( urls );
			reflectionCube.format = THREE.RGBFormat;

			var refractionCube = new THREE.Texture( reflectionCube.image, new THREE.CubeRefractionMapping() );

			material = new THREE.MeshLambertMaterial( {
				color: 0xffffff * Math.random(), 
				ambient: 0xffffff * Math.random(),
//				envMap: refractionCube, refractionRatio: 0.85,
				envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3, metal: true,
				opacity: 0.9,
				specular: 0xffffff * Math.random(),
				shininess: 50,
				side: THREE.DoubleSide,
				transparent: true
			} );
			material.type = 3;
			return material;
		}
	};

	JAMA.materials.PhongDisturb = {
		title: "Phong Disturb",
		set: function() {
		var texture = new THREE.ImageUtils.loadTexture( JAMA.basePath + 'textures/' );
			var p = JAMA.basePath + 'textures/';
			var urls = [ p + 'disturb.jpg', p + 'disturb.jpg', p + 'disturb.jpg', p + 'disturb.jpg', p + 'disturb.jpg', p + 'disturb.jpg' ];
			var texture = THREE.ImageUtils.loadTextureCube( urls, new THREE.CubeRefractionMapping() );
			var material = new THREE.MeshPhongMaterial( { color: 0xccddff, envMap: texture, refractionRatio: 0.98, reflectivity: 0.9 } );
			material.ambient.setHex( 0xffffff * Math.random() );
			material.color.setHex( 0xffffff * Math.random() );
			material.emissive.setHex( 0x333333 * Math.random() );
			material.metal = Math.floor( 2 * Math.random() );
			material.opacity = Math.random().toFixed(2);
			material.side = 2;
			material.shininess = (100 * Math.random()).toFixed(0);
			material.specular.setHex( 0x888888 * Math.random() );
			material.transparent = true;
			material.wireframe = Math.floor( 1.3 * Math.random() );
			material.type = 3;
			return material
		}
	};

	JAMA.materials.PhongEnvMapDenim = {
		title: "Phong EnvMap Denim",
		set: function() {
			var p = JAMA.basePath + 'textures/';
			var urls = [ p + 'denim.jpg', p + 'denim.jpg', p + 'denim.jpg', p + 'denim.jpg', p + 'denim.jpg', p + 'denim.jpg' ];

			var reflectionCube = THREE.ImageUtils.loadTextureCube( urls );
			reflectionCube.format = THREE.RGBFormat;

			var refractionCube = new THREE.Texture( reflectionCube.image, new THREE.CubeRefractionMapping() );
/*
			var material = new THREE.MeshPhongMaterial( { 

//color: 0xccddff, envMap: texture, refractionRatio: 0.98, reflectivity: 0.9 } );
			material.ambient.setHex( 0xffffff * Math.random() );
			material.color.setHex( 0xffffff * Math.random() );
			material.emissive.setHex( 0x333333 * Math.random() );
			material.metal = Math.floor( 2 * Math.random() );
			material.opacity = Math.random().toFixed(2);
			material.side = 2;
			material.shininess = (100 * Math.random()).toFixed(0);
			material.specular.setHex( 0x888888 * Math.random() );
			material.transparent = true;
			material.wireframe = Math.floor( 1.3 * Math.random() );
*/
		material = new THREE.MeshPhongMaterial( {
			color: 0xffffff * Math.random(), 
			ambient: 0xffffff * Math.random(),
//			map: texture,
//			envMap: refractionCube, refractionRatio: 0.85,
			envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3, metal: true,
			opacity: 0.9,
			specular: 0xffffff * Math.random(),
			shininess: 50,
			side: THREE.DoubleSide,
			transparent: true
		} );
			material.type = 3;
			return material
		}
	};


// Reflections

	JAMA.materials.PhongEnvMapCar = {
		title: "Phong EnvMap Car",
		category: "Evironment Map",
		set: function() {
			var p = JAMA.basePath + 'textures/';
			var urls = [ p + 'im5.jpg', p + 'im5.jpg', p + 'im5.jpg', p + 'im5.jpg', p + 'im5.jpg', p + 'im5.jpg' ];
			var texture = THREE.ImageUtils.loadTextureCube( urls, new THREE.CubeRefractionMapping() );
			var material = new THREE.MeshPhongMaterial( { color: 0xccddff, envMap: texture, refractionRatio: 0.98, reflectivity: 0.9 } );
			material.ambient.setHex( 0xffffff * Math.random() );
			material.color.setHex( 0xffffff * Math.random() );
			material.emissive.setHex( 0x333333 * Math.random() );
			material.metal = Math.floor( 2 * Math.random() );
			material.opacity = Math.random().toFixed(2);
			material.side = 2;
			material.shininess = (100 * Math.random()).toFixed(0);
			material.specular.setHex( 0x888888 * Math.random() );
			material.transparent = true;
			material.wireframe = Math.floor( 1.3 * Math.random() );
			material.type = 3;
			return material;
		}
	};


	JAMA.materials.PhongChrome = {
		title: "Phong Chrome",
		category: "Evironment Map",
		set: function() {
			var path = JAMA.basePath + 'textures/cube/SwedishRoyalCastle/';
			var format = '.jpg';
			var urls = [
				path + 'px' + format, path + 'nx' + format,
				path + 'py' + format, path + 'ny' + format,
				path + 'pz' + format, path + 'nz' + format
			];
			var texture = THREE.ImageUtils.loadTextureCube( urls, new THREE.CubeRefractionMapping() );
			var material = new THREE.MeshPhongMaterial( { color: 0xccddff, envMap: texture, refractionRatio: 0.98, reflectivity:0.9 } );
			material.type = 3;
			return material;
		}
	};

	JAMA.materials.PhongPisaRefraction = {
		title: "Phong Pisa Refract",
		category: "Evironment Map",
		set: function() {
			var path = JAMA.basePath + 'textures/cube/pisa/';
			var format = '.png';
			var urls = [
				path + 'px' + format, path + 'nx' + format,
				path + 'py' + format, path + 'ny' + format,
				path + 'pz' + format, path + 'nz' + format
			];
			var refraction = THREE.ImageUtils.loadTextureCube( urls, new THREE.CubeRefractionMapping() );
			var material = new THREE.MeshBasicMaterial( { color: 0xccccff, envMap: refraction, refractionRatio: 0.85, eflectivity: 0.9 } );
			material.type = 3;
			return material;
		}
	};

	JAMA.materials.PhongPisaReflection = {
		title: "Phong Pisa Reflect",
		category: "Evironment Map",
		set: function() {
			var path = JAMA.basePath + 'textures/cube/pisa/';
			var format = '.png';
			var urls = [
				path + 'px' + format, path + 'nx' + format,
				path + 'py' + format, path + 'ny' + format,
				path + 'pz' + format, path + 'nz' + format
			];
			var reflectionCube = THREE.ImageUtils.loadTextureCube( urls );
			reflectionCube.format = THREE.RGBFormat;
			var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: reflectionCube } );
			material.type = 3;
			return material;
		}
	};

//console.log( JAMA );

/*
	JAMA.materials. = function() {
		var material = 
		material.type = 3;
		return material;
	};

*/