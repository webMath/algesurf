	var ASCO = {} || ASCO;

 	ASCO.addControlsBox = function() {
		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.title = 'Be in control of your equations';
		tab.innerHTML =
			'<a href=# id=tabControls><p class=button >' +
				'<i class="fa fa-cogs"></i> Parameter Controls...' +
			'</p></a>'; 
		tabControls.onclick = function() { JA.toggleTab( ASCO.controlsBox ); };

		ASCO.controlsBox = tab.appendChild( document.createElement( 'div' ) );
		ASCO.controlsBox.style.cssText = 'cursor: auto; display: none;' ;
		ASCO.controlsBox.innerHTML = 
			'<h3>Coefficients</h3>' +
			'<div id=divCon ></div>' +
		'';

	};

	function updateMesh() {

		var material = JATH.selectedObject.material;
		if ( JATH.selectedObject ) app.scene.remove( JATH.selectedObject );

		if ( app.a ) app.a = parseFloat( outA.value );
		if ( app.b ) app.b = parseFloat( outB.value );
		if ( app.c ) app.c = parseFloat( outC.value );
		if ( app.d ) app.d = parseFloat( outD.value );
		if ( app.e ) app.e = parseFloat( outE.value );
		if ( app.f ) app.f = parseFloat( outF.value );
		if ( app.g ) app.g = parseFloat( outG.value );
		if ( app.h ) app.h = parseFloat( outH.value );
		if ( app.R1 ) app.R1 = parseFloat( outR1.value );
		if ( app.R2 ) app.R2 = parseFloat( outR2.value );

		var geometry = new THREE.ParametricGeometry( app.curve, 80, 40 );

		mesh = new THREE.Mesh( geometry, material );
		mesh.castShadow = true;
		mesh.receiveShadow = true;

		app.scene.add( mesh );
		JATH.selectedObject = mesh;

	}