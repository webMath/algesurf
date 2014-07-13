	JAMA = {} || JAMA;

	JAMA.materials = {} || JAMA.materials;

	JAMA.addMaterialSelectBox = function() {
		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.title = 'Choose from a number of materials to apply to the surface';
		tab.innerHTML =
			'<a href=# id=tabMaterialSelect ><p class=button >' +
				'<i class="fa fa-cubes"></i> Material Select...' +
			'</p></a>';
		tabMaterialSelect.onclick = function() { JA.toggleTab( JAMA.MaterialSelectBox ); } ;

		JAMA.MaterialSelectBox = tab.appendChild( document.createElement( 'div' ) );
		JAMA.MaterialSelectBox.style.cssText = 'cursor: auto; display: none; ' ;
		JAMA.MaterialSelectBox.innerHTML =
			'<h3 style=margin-bottom:0; >Materials - Basic</h3>' +
			'<div>' +
				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.PhongRandom()); >Phong Random (Default)</a><br>' +
				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.NormalSmooth()); >Normal Smooth</a><br>' +
				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.BasicFlatRed()); >Basic Flat Red</a><br>' +
				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.LambertSmoothRandom()); >Lambert Smooth Random</a><br>' +
				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.PhongPlastic()); >Phong Plastic</a><br>' +
				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.PhongFlat()); >Phong Flat</a><br>' +
				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.PhongFlat2()); >Phong Flat2</a><br>' +
				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.PhongSmooth()); >Phong Smooth</a><br>' +
			'</div>' +
//			'<h3 style=margin-bottom:0; >Materials - Vertex Colors</h3>' +
//				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.PhongVertexColors()); >Phong Vertex Colors</a><br>' +

			'<h3 style=margin-bottom:0; >Materials - Textured</h3>' +
				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.PhongPureWhite()); >Phong Pure White</a><br>' +
				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.PhongGridded()); >Phong Gridded</a><br>' +
				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.PhongUVGrid()); >Phong UVGrid</a><br>' +
				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.PhongLavatile()); >Phong Lavatile</a><br>' +
				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.PhongDisturb()); >Phong Disturb</a><br>' +
//				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.PhongCar()); >Phong Car</a><br>' +

			'<h3 style=margin-bottom:0; >Materials - Reflections</h3>' +
				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.PhongCar()); >Phong Car</a><br>' +
				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.PhongChrome()); >Phong Chrome</a><br>' +
				'<a href=# onclick=JAMA.updateMaterial(JAMA.materials.PhongShiny()); >Phong Shiny</a><br>' +
		'';
	};

	JAMA.updateMaterial = function( material ) {
		var sides = JATH.selectedObject.material.side;

		JATH.selectedObject.material = material;
/*
		material = new THREE.MeshBasicMaterial( {
			color: 0xffffff * Math.random(), 
			ambient: 0xffffff * Math.random(),
//			map: texture,
// envMap: refractionCube, refractionRatio: 0.85,
//			envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.3, metal: true,
			opacity: 0.9,
			specular: 0xffffff * Math.random(),
			shininess: 50,
			side: 2,
			transparent: true
		} );

ASFR.ifr.contentWindow.scene.children[1].material = material;
*/

		JATH.selectedObject.material.side = sides;
	};

	JAMA.addMaterialEditorBox = function() {
		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.title = 'Edit the parameters of the current material';
		tab.innerHTML =
			'<a href=# id=tabMaterialEditor ><p class=button >' +
				'<i class="fa fa-cube"></i> Material Editor...' +
			'</p></a>';
		tabMaterialEditor.onclick = function() { JA.toggleTab( JAMA.MaterialEditorBox ); JAMA.updateMaterialEditorBox( JATH.selectedObject ); } ;

		JAMA.MaterialEditorBox = tab.appendChild( document.createElement( 'div' ) );
		JAMA.MaterialEditorBox.style.cssText = 'cursor: auto; display: none; ' ;
	};

	JAMA.updateMaterialEditorBox = function() {
		var m = JATH.selectedObject.material;
		var txt = 
			'<p>Selected id: ' + JATH.selectedObject.id + '</p>' +
			'<p>' +
				'Material: <select id=selMaterial title="Select type" >' +
					'<option>Normal</option>' +
					'<option>Basic</option>' +
					'<option>Lambert</option>' +
					'<option>Phong</option>' +
				'<select><br>' +
				'Shading: &nbsp;<select id=selShading title="Select type" >' +
					'<option>None</option>' +
					'<option>Flat</option>' +
					'<option selected>Smooth</option>' +
				'<select><br>' +
				'Side: &nbsp; &nbsp;&nbsp;<select id=selSide title="Select sides" >' +
					'<option>Front</option>' +
					'<option>Back</option>' +
					'<option selected>Both</option>' +
				'<select><br>'; 

				if ( m.ambient ) txt += 'Ambient: &nbsp;<input type=color id=inpAmbient value=#' + m.ambient.getHexString() + ' > <output id=outAmbient >#' + m.ambient.getHexString() + '</output><br>';
				if ( m.color ) txt += 'Color: &nbsp; &nbsp;<input type=color id=inpColor value=#' + m.color.getHexString() + '> <output id=outColor >#' + m.color.getHexString() + '</output><br>';
				if ( m.emissive ) txt += 'Emissive: <input type=color id=inpEmissive value=#' + m.emissive.getHexString() + '> <output id=outEmissive >#' + m.emissive.getHexString() + '</output><br>';
				if ( m.specular ) txt += 'Specular: <input type=color id=inpSpecular value=#' + m.specular.getHexString() + '> <output id=outSpecular >#' + m.specular.getHexString() + '</output><br>';

				txt +=
				'Metal: &nbsp; &nbsp;<input type=checkbox id=inpMetal ><br>' +
				'Wireframe:<input type=checkbox id=inpWireframe value=' + m.wireframe + ' ><br>' +

				'Opacity: &nbsp;<input type=range id=inpOpacity title="0 to 1" min=0 max=1 step=0.01 value=' + m.opacity + ' >' +
					'<output id=outOpacity >' + m.opacity + '</output><br>' +
				'Shininess:<input type=range id=inpShininess title="0 to 300" min=0 max=300 step=5 value=' + m.shininess + ' >' +
					'<output id=outShininess >' + m.shininess + '</output><br>' +
			'</p>' +
			'<p style=text-align:right; >' +
				'<a class=button href=JavaScript:JA.toggleTab(JAMA.MaterialEditorBox); >Close</a> ' +
			'</p>' +
		'';
		JAMA.MaterialEditorBox.innerHTML = txt;

		selMaterial.selectedIndex = m.type;
		selMaterial.onchange = function() {
			if ( selMaterial.selectedIndex === 0 ) {
				JATH.selectedObject.material = new THREE.MeshNormalMaterial();
				JATH.selectedObject.material.type = 0;
			} else if ( selMaterial.selectedIndex === 1 ) {
				JATH.selectedObject.material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
				JATH.selectedObject.material.type = 1;
			} else if ( selMaterial.selectedIndex === 2 ) {
				JATH.selectedObject.material = new THREE.MeshLambertMaterial( { color: 0x000000 } );
				JATH.selectedObject.material.type = 2;
			} else {
				JATH.selectedObject.material = new THREE.MeshPhongMaterial( { color: 0x000000 } );
				JATH.selectedObject.material.type = 3;
			}
			JAMA.updateMaterialEditorBox();
		};
// console.log( JATH.selectedObject.material, JATH.selectedObject.material.type );
		selShading.selectedIndex = m.shading;
		selShading.onchange = function() { m.shading = selShading.selectedIndex; JAMA.updateMaterialEditorBox(); };

		selSide.selectedIndex = m.side;
		selSide.onchange = function() { m.side = selSide.selectedIndex; JAMA.updateMaterialEditorBox(); };

		if ( m.ambient ) inpAmbient.onchange = function() { m.ambient.setHex( this.value.replace("#", "0x") ); JAMA.updateMaterialEditorBox(); };
		if ( m.color ) inpColor.onchange = function() { m.color.setHex( this.value.replace("#", "0x") ); JAMA.updateMaterialEditorBox(); };
		if ( m.emissive ) inpEmissive.onchange = function() { m.emissive.setHex( this.value.replace("#", "0x") ); JAMA.updateMaterialEditorBox(); };
		if ( m.specular ) inpSpecular.onchange = function() { m.specular.setHex( this.value.replace("#", "0x") ); JAMA.updateMaterialEditorBox(); };

		inpMetal.checked = m.metal;
		inpMetal.onchange = function() { m.metal = this.checked; JAMA.updateMaterialEditorBox(); };
		inpWireframe.checked = m.wireframe;
		inpWireframe.onchange = function() { m.wireframe = inpWireframe.checked; JAMA.updateMaterialEditorBox(); };

		inpOpacity.onchange = function() {  m.opacity = parseFloat( this.value ); m.transparent = true; JAMA.updateMaterialEditorBox(); };
		inpShininess.onchange = function() { m.shininess = this.value; JAMA.updateMaterialEditorBox(); };
	};

/*
http://mrdoob.github.io/three.js/docs/#Reference/Materials/MeshPhongMaterial
materials.push( new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } ) );

*/

	JAMA.materials.PhongRandom = function() {
		var material = new THREE.MeshPhongMaterial();
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
	};


	JAMA.materials.NormalSmooth = function() {
		var material = new THREE.MeshNormalMaterial();
		material.type = 0;
		return material;
	};

	JAMA.materials.BasicFlatRed = function() {
		material = new THREE.MeshBasicMaterial( { color: 0xff0000, shading: THREE.FlatShading });
		material.type = 1;
		return material;
	};

	JAMA.materials.LambertSmoothRandom = function() {
		material = new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff, shading: THREE.SmoothShading });
		material.type = 2;
		return material;
	};

	JAMA.materials.PhongPlastic = function() {
		var material = new THREE.MeshPhongMaterial( { color: 0xff0000, specular: 0x888888, ambient: 0xff0000, shininess: 250 } );
		material.type = 3;
		return material;
	};

	JAMA.materials.PhongFlat = function() {
		var material = new THREE.MeshPhongMaterial( { color: 0x0000ff, specular: 0x111111, shininess: 1, shading: THREE.FlatShading } );
		material.type = 3;
		return material;
	};

	JAMA.materials.PhongFlat2 = function() {
		var material =  new THREE.MeshPhongMaterial( { ambient: 0x888800, color: 0xdd00ff, specular: 0x009900, shininess: 30, shading: THREE.FlatShading });
		material.type = 3;
		return material;
	};

	JAMA.materials.PhongSmooth = function() {
		var material = new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.SmoothShading });
		material.type = 3;
		return material;
	};

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
		material.type = 3;
		return material;
	};

// textures

	JAMA.materials.PhongTextureRandom = function() {
		var texture = new THREE.ImageUtils.loadTexture( '../../../textures/pure-white.png' );
		var material = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture, transparent: true } );
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

	JAMA.materials.PhongPureWhite = function() {
		var texture = new THREE.ImageUtils.loadTexture( '../../../textures/pure-white.png' );
		var material = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture, opacity: 1, transparent: true } );
		material.type = 3;
		return material;
	};

	JAMA.materials.PhongGridded = function() {
		var texture = new THREE.ImageUtils.loadTexture( '../../../textures/square.png' );
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
		texture.repeat.set( 30, 30 );
		var material = new THREE.MeshPhongMaterial( { map: texture, opacity: 0.5, transparent: true } );
		material.type = 3;
		return material;
	};

	JAMA.materials.PhongUVGrid = function() {
		var texture = new THREE.ImageUtils.loadTexture( '../../../textures/ash_uvgrid01.jpg' );
		var material = new THREE.MeshPhongMaterial( { map: texture } );
		material.type = 3;
		return material;
	};

	JAMA.materials.PhongLavatile = function() {
		var texture = new THREE.ImageUtils.loadTexture( '../../../textures/lavatile.jpg' );
		var material = new THREE.MeshPhongMaterial( { map: texture } );
		material.type = 3;
		return material;
	};

	JAMA.materials.PhongDisturb = function() {
		var texture = new THREE.ImageUtils.loadTexture( '../../../textures/disturb.jpg' );
		var material = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture } );
		material.type = 3;
		return material;
	};
/*
	JAMA.materials.PhongCar = function() {
		var texture = new THREE.ImageUtils.loadTexture( '../../../textures/im5.jpg' );
		var material = new THREE.MeshPhongMaterial( { map: texture } );
		material.type = 3;
		return material;
	};
*/
// Reflections

	JAMA.materials.PhongCar = function() {
		var p = '../../../textures/';
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
	};


	JAMA.materials.PhongChrome = function() {
		var path = '../../../textures/cube/SwedishRoyalCastle/';
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
	};


	JAMA.materials.PhongShiny = function() {
		var path = '../../../textures/cube/pisa/';
		var format = '.png';
		var urls = [
			path + 'px' + format, path + 'nx' + format,
			path + 'py' + format, path + 'ny' + format,
			path + 'pz' + format, path + 'nz' + format
		];
		var texture = THREE.ImageUtils.loadTextureCube( urls, new THREE.CubeRefractionMapping() );
		var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: texture, refractionRatio: 0.95 } );
		material.type = 3;
		return material;
	};

/*
	JAMA.materials. = function() {
		var material = 
		material.type = 3;
		return material;
	};

*/