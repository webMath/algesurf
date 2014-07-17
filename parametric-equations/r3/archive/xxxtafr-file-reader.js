
	var TAFR = {} || TAFR;
	var data;

	TAFR.addFileReader = function() {
		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.innerHTML =
			'<a href=# id=tabFileReader ><p class=button >' +
				'<i class="fa fa-file-image-o"></i> File Reader...' +
			'</p></a>'; 
		tabFileReader.onclick = function() {JA.toggleDialogs(TAFR.FileReader); };

		TAFR.FileReader = JA.container.appendChild( document.createElement( 'div' ) );
		TAFR.FileReader.style.cssText = 'cursor: auto; display: none; background-color: #ccc; opacity: 0.9; padding: 20px; ' +
			'bottom: 0; height: 550px; left: 0; margin: auto; position: absolute; right: 0; top: 0; width: 450px; ';
		TAFR.FileReader.innerHTML =
			'<p>' +
				'<input type=file id=inpFile ><br>' +
				'<div id=divData></div>' +
			'</p>' +
			'<p>' +
				'Scale <input type=number id=numScale value=0.01 /><br>' +
				'<input type=radio name=filesFO onclick=TAFR.files=this.value id=radNewScene value="scene" />New Scene - load file as a new scene<br>' +
				'<input type=radio name=filesFO onclick=TAFR.files=this.value id=radSceneAppend value="append" />Append - load file and add to current scene<br>' +
				'<input type=radio name=filesFO onclick=TAFR.files=this.value value="replace" />Replace - load file and replace currently selected object<br>' +
			'</p>' +
			'<p style=text-align:right; >' +
				'<a class=button href=JavaScript:JA.toggleDialogs(TAFR.FileReader); >Close</a> ' +
			'</p>' +
		'';
		radSceneAppend.checked = true;
		inpFile.onchange = function() { TAFR.readFile( this ); };

	};

	TAFR.readFile = function( that) {
		if ( that.files && that.files[0]){
			var loader = new THREE.ObjectLoader();
			var reader = new FileReader();
			reader.onload = function ( event ) {  
				data = event.target.result;
				divData.innerHTML = data.substr( 0, 1000 );
				data = JSON.parse( event.target.result );
				if ( TAFR.files === 'scene' ) {
					JATH.scene.remove( JATH.assets );
					JATH.assets = new THREE.Object3D();
					JATH.scene.add( JATH.assets );
					JATH.scene = loader.parse( data );
					for (var i = 0, len = JATH.scene.children.length; i < len; i++) {
						JATH.scene.children[i].scale.multiplyScalar( numScale.value );

					} 
					JATH.assets.children = JATH.scene.children;
					JALI.toggleLightAmbient();
					JALI.toggleLightCamera();
					JALI.toggleLightPosition();
				} else {
					var result = loader.parse( data );
					var asset = new THREE.Object3D();
					asset.children = result.children;
					for (var i = 0, len = asset.children.length; i < len; i++) {
						asset.children[i].scale.multiplyScalar( numScale.value );
					} 

					var vase = new THREE.Object3D();
					for (var i = 0, len = asset.children.length; i < len; i++) {
						vase.add( asset.children[i] );
					} 
					JATH.assets.add( vase );
					JATH.selectedObject = vase;
					vase.position.x = 100;
				}
			};
			reader.readAsText( that.files[0] );
		}
	};





