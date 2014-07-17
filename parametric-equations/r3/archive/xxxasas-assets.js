
	var ASAS = {} || ASAS;

//	function v( x, y, z ){ return new THREE.Vector3( x, y, z ); }

	ASAS.addAssets = function() {

//		var file = ASFR.files[ Math.floor( Math.random() * ASFR.files.length ) ][0];
		var file = ASFR.files[ 8 ][0];
		ASFR.updateIframe( file );

/*
		JALI.toggleLightAmbient();
		JALI.toggleLightCamera();
		JALI.toggleLightPosition();


// axes
		JATH.scene.add( new THREE.ArrowHelper( v(1, 0, 0), v(0, 0, 0), 20, 0xcc0000) );
		JATH.scene.add( new THREE.ArrowHelper( v(0, 1, 0), v(0, 0, 0), 20, 0x00cc00) );
		JATH.scene.add( new THREE.ArrowHelper( v(0, 0, 1), v(0, 0, 0), 20, 0x0000cc) );
*/

	};

	ASAS.updateGroundPlane = function( segments, base ) {
		JATH.scene.remove( mesh );

		geometry = new THREE.PlaneGeometry( 100, 100, segments - 1, segments - 1 );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( Math.PI / 2 ) );

		material = JATH.material
		material.side = 2;
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.y = base;
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		JATH.scene.add( mesh );

		JAPR.setWireframe();

		JATH.selectedObject = mesh;
	}

	ASAS.updateBox = function( box, parameters ) {
//		box = {} || box;
		var parameters = parameters || {} ;
		if ( box ) scene.remove( box );
		var sizeX = ( parameters.sizeX ) ? parameters.sizeX : 10 ;
		var sizeY = ( parameters.sizeY ) ? parameters.sizeY : 10 ;
		var sizeZ = ( parameters.sizeZ ) ? parameters.sizeZ : 20 ;
		geometry = new THREE.BoxGeometry( sizeX, sizeY, sizeZ );
		box = new THREE.Mesh( geometry, JATH.material );

		box.castShadow = true;
		box.receiveShadow = true;
		box.name = 'Ground Box'; 
		JATH.scene.add( box );
		JATH.selectedObject = box;
		return box;
	};

	ASAS.addShadowPlane = function() {
		geometry = new THREE.SphereGeometry( 15, 20, 20 );
		var material = JAMA.materials.PhongPureWhite();
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( -25, -20, 25 );
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		JATH.scene.add( mesh );

		var geometry = new THREE.BoxGeometry( 100, 5, 45 );
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 0, -20, 25 );
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		JATH.scene.add( mesh );

		geometry = new THREE.SphereGeometry( 15, 20, 20 );
		material = new  THREE.MeshPhongMaterial( { ambient: 0xffffff, color: 0xff0000, emissive: 0x000000, specular: 0xffffff, shininess: 30, side: 0 } );
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( -25, -20, -25 );
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		JATH.scene.add( mesh );

		geometry = new THREE.BoxGeometry( 100, 5, 45 );

		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 0, -20, -25 );
		mesh.castShadow = true;
		mesh.receiveShadow = true;
		JATH.scene.add( mesh );
		JATH.selectedObject = mesh;

		loader = new THREE.JSONLoader();
		loader.load( '../models/WaltHeadLo.js', function ( geometry ) {
			mesh = new THREE.Mesh( geometry, material );
			mesh.scale.set( 0.5, 0.5, 0.5 );
			mesh.position.set( 25, 0, -25 );
			mesh.geometry.verticesNeedUpdate = true;
			mesh.geometry.computeFaceNormals();
			mesh.geometry.computeVertexNormals();
			mesh.castShadow = true;
			JATH.mesh.receiveShadow = true;
			scene.add( mesh );
		} );
	};

	ASAS.addBoxGroup = function() {
		for (var i = 0; i < 10; i++) {
			geometry = new THREE.BoxGeometry( 10, 10, 10 );
			JATH.material = JAMA.materials.PhongRandom();
			JATH.material.side = 0;
			mesh = new THREE.Mesh( geometry, JATH.material );
			mesh.position.set( 100 * Math.random() - 50, 70 * Math.random(), 100 * Math.random() - 50 );
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			scene.add( mesh );
		} 
		JATH.selectedObject = mesh;
	};

	ASAS.addSphereGroup = function() {
		spheres = new THREE.Object3D();
		JATH.material.side = 0;
		for (var i = 0; i < 5; i++) {
			geometry = new THREE.SphereGeometry( 15, 20, 20 );
			JATH.material = JAMA.materials.PhongRandom();
			mesh = new THREE.Mesh( geometry, JATH.material );
			mesh.position.set( 100 * Math.random() - 50, 50 * Math.random(), 100 * Math.random() - 50 );
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			spheres.add( mesh );
		} 
		JATH.scene.add( spheres );
		JATH.selectedObject = spheres.children[0];
	};

	ASAS.addNURBS = function( x, y, z) {

		loadScript1();

		function loadScript1() {
			var script = document.body.appendChild( document.createElement( 'script' ) );
			script.type = 'text/javascript';
			script.src = 'http://mrdoob.github.io/three.js/examples/js/curves/NURBSCurve.js';
			script.onload = function () { loadScript2(); };
		}

		function loadScript2() {
			var script = document.body.appendChild( document.createElement( 'script' ) );
			script.type= 'text/javascript';
			script.src= 'http://mrdoob.github.io/three.js/examples/js/curves/NURBSSurface.js';
			script.onload = function () { loadScript3(); };
		}

		function loadScript3() {
			var script = document.body.appendChild( document.createElement( 'script' ) );
			script.type= 'text/javascript';
			script.src= 'http://mrdoob.github.io/three.js/examples/js/curves/NURBSUtils.js';
			script.onload = function () { doNURB( x, y, z ); };
		}

		function doNURB( x, y, z ) {
			var r = function( a, b ) { return a * Math.random() - b; };
			var nsControlPoints = [
				[
					new THREE.Vector4 ( -50, 0, -50, 1 ),  // last number is the weighting
					new THREE.Vector4 ( -50, r( 200, 100), -25, 1 ),
					new THREE.Vector4 ( -50, r( 200, 100), 25, 1 ),
					new THREE.Vector4 ( -50, r( 200, 100), 50, 1 ),
					new THREE.Vector4 ( -50, 0, 50, 1 )
				],
				[
					new THREE.Vector4 ( -25, r( 200, 100 ), -50, 1 ),
					new THREE.Vector4 ( -25, r( 125, 125 ), -25, 1 ),
					new THREE.Vector4 ( -25, r( 125, 125 ), 25, 1 ),
					new THREE.Vector4 ( -25, r( 125, 125 ), 50, 1 ),
					new THREE.Vector4 ( -25, r( 200, 100 ), 50, 1 )
				],
				[
					new THREE.Vector4 ( 25, r( 200, 100 ), -50, 1 ),
					new THREE.Vector4 ( 25, r( 125, 125 ), -25, 1 ),
					new THREE.Vector4 ( 25, r( 125, 125 ), 25, 1 ),
					new THREE.Vector4 ( 25, r( 125, 125 ), 50, 1 ),
					new THREE.Vector4 ( 25, r( 200, 100 ), 50, 1 )
				],
				[
					new THREE.Vector4 ( 50, 0, -50, 1 ),
					new THREE.Vector4 ( 50, r( 200, 100 ), -25, 1 ),
					new THREE.Vector4 ( 50, r( 200, 100 ), 25, 1 ),
					new THREE.Vector4 ( 50, r( 200, 100 ), 50, 1 ),
					new THREE.Vector4 ( 50, 0, 50, 1 )
				]
			];
			
			var degree1 = 3; // # of spaces between x control points
			var degree2 = 4; // # spaces between y control points
			var knots1 = [0, 0, 0, 0, 1, 1, 1, 1]; // A 0 and a 1 for each x control point
			var knots2 = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]; // ditto for y. keep values between 0 and 1.
			var nurbsSurface = new THREE.NURBSSurface( degree1, degree2, knots1, knots2, nsControlPoints );
			getSurfacePoint = function(u, v) { return nurbsSurface.getPoint(u, v); };

			geometry = new THREE.ParametricGeometry( getSurfacePoint, 10, 10 );
			material = JAMA.materials.PhongPureWhite();
			material.side = 2;
			nurb = new THREE.Mesh( geometry, material );
			nurb.position.set( 25, 0, 25 );
			nurb.scale.set( 0.3, 0.2, 0.3 );
			nurb.castShadow = true;
			nurb.receiveShadow = true;
			scene.add( nurb );

/*
// unnecessary bling
			var col = 0xffffff * Math.random();
			scene.add( new THREE.FaceNormalsHelper( nurb, -5, col ) );
			scene.add( new THREE.FaceNormalsHelper( nurb, 5, col ) );
			col = 0xffffff * Math.random();
			scene.add( new THREE.VertexNormalsHelper( nurb, -5, col ) );
			scene.add( new THREE.VertexNormalsHelper( nurb, 5, col ) );
*/

			JATH.selectedObject = nurb;
		}
	};
