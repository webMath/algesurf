
	var ASFR = {} || ASFR;
	var THREE, renderer, scene, camera, controls;
	var app;

	ASFR.addFileReader = function() {
		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.title = 'Choose from a number of equations to display';
		tab.innerHTML =
			'<a href=# id=tabFileReader ><p class=button >' +
				'<i class="fa fa-file-image-o"></i> File Reader...' +
			'</p></a>'; 
		tabFileReader.onclick = function() { JA.toggleDialogs( ASFR.FileReader );ASFR.ifr.style.display=''; };

		ASFR.FileReader = tab.appendChild( document.createElement( 'div' ) );
		ASFR.FileReader.style.cssText = 'cursor: auto; display: none; ';

		var fileList = '';
		var file;
		for ( var i = 0, len = ASFR.files.length; i < len; i++ ) {
			file = ASFR.files[ i ][0];
			fileList += '<a href=JavaScript:ASFR.updateIframe("' + file + '"); >' + file + '</a><br>';
		}
		ASFR.FileReader.innerHTML =
			'<h3>Parametric Equations</h3>' +
			'<div >' + fileList + '</div>' +
			'<p style=text-align:right; >' +
				'<a class=button href=JavaScript:JA.toggleDialogs(ASFR.FileReader);ASFR.ifr.style.display="";ASFR.ifr.style.zIndex=0; ); >Close</a> ' +
			'</p>' +
		'';
	};

	ASFR.updateIframe = function( file ) { 
// console.log( ASFR.ifr, file );
		if ( !ASFR.ifr ) {
			ASFR.ifr = JA.container.appendChild( document.createElement( 'iframe' ) );
			ASFR.ifr.height =  window.innerHeight;
			ASFR.ifr.width = window.innerWidth;
			ASFR.ifr.style.cssText = 'border-width: 0; position: absolute; ';
		}
		chkWires.checked = false;
		divCon.innerHTML = '';

		ASFR.ifr.onload = function() {
			app = ASFR.ifr.contentWindow;
			THREE = app.THREE;
			JATH.renderer = app.renderer;
			JATH.scene = scene = app.scene;
			JATH.camera = camera = app.camera;
			JATH.controls = controls = app.controls;
// console.log( scene );

			JAPR.setRandomGradient();
			JATH.selectedObject = scene.children[0]; 
			ASFR.updateRenderer();
//			addLights();

			JALI.toggleLightAmbient();
			JALI.toggleLightCamera();
			JALI.toggleLightPosition();

//			JAMA.updateMaterial( JAMA.materials.NormalSmooth );
			divMsg1.innerText = 'Equation: ' + file;
			divMsg3.style.cssText += 'font-size: small; width: 300px;';
			divMsg3.innerText = app.curve;

 // console.log( app.a, app.aMin, app.aMax, app.aStep );

			if ( app.a ) { 
				divCon.innerHTML += 'a: <input type=range id=inpA title="default ' + app.a + '" ' +
					'min=' + app.aMin + ' max=' + app.aMax + ' step=' + app.aStep + ' value=' + app.a + 
					' onmousemove=outA.value=inpA.value;updateMesh(); style=width:200px; > ' +
					'<input id=outA style=width:30px; onchange=inpA.value=outA.value;updateMesh(); value=' + app.a + ' ><br>'; 
//	not			inpA.type = 'range';
//				inpA.value = app.a;
//				outA.value = app.a;
//				inpA.min = app.aMin;
//				inpA.max = app.aMax;
//				inpA.step = app.aStep;
//				inpA.onchange = updateMesh;
//				outA.onchange = updateMesh;
			}

			if ( app.b ) { 
				divCon.innerHTML += 'b: <input type=range id=inpB title="default ' + app.b + '" ' +
					'min=' + app.bMin + ' max=' + app.bMax + ' step=' + app.bStep + ' value=' + app.b + 
					' onmousemove=outB.value=inpB.value;updateMesh(); style=width:200px; > ' +
					'<input id=outB style=width:30px; onchange=inpB.value=outB.value;updateMesh(); value=' + app.b + ' ><br>'; 
			}

			if ( app.c ) { 
				divCon.innerHTML += 'c: <input type=range id=inpC title="default ' + app.c + '" ' +
					'min=' + app.cMin + ' max=' + app.cMax + ' step=' + app.cStep + ' value=' + app.c+ 
					' onmousemove=outC.value=inpC.value;updateMesh(); style=width:200px; > ' +
					'<input id=outC style=width:30px; onchange=inpC.value=outC.value;updateMesh(); value=' + app.c + ' ><br>'; 
			}

			if ( app.d ) { 
				divCon.innerHTML += 'd: <input type=range id=inpD title="default ' + app.d + '" ' +
					'min=' + app.dMin + ' max=' + app.dMax + ' step=' + app.dStep + ' value=' + app.d + 
					' onmousemove=outD.value=inpD.value;updateMesh(); style=width:200px; > ' +
					'<input id=outD style=width:30px; onchange=inpD.value=outD.value;updateMesh(); value=' + app.d + ' ><br>'; 
			}

			if ( app.e ) { 
				divCon.innerHTML += 'e: <input type=range id=inpE title="default ' + app.e + '" ' +
					'min=' + app.eMin + ' max=' + app.eMax + ' step=' + app.eStep + ' value=' + app.e + 
					' onmousemove=outE.value=inpE.value;updateMesh(); style=width:200px; > ' +
					'<input id=outE style=width:30px; onchange=inpE.value=outE.value;updateMesh(); value=' + app.e + ' ><br>'; 
			}

			if ( app.f ) { 
				divCon.innerHTML += 'f: <input type=range id=inpF title="default ' + app.f + '" ' +
					'min=' + app.fMin + ' max=' + app.fMax + ' step=' + app.fStep + ' value=' + app.f + 
					' onmousemove=outF.value=inpF.value;updateMesh(); style=width:200px; > ' +
					'<input id=outF style=width:30px; onchange=inpF.value=outF.value;updateMesh(); value=' + app.f + ' ><br>'; 
			}

			if ( app.g ) { 
				divCon.innerHTML += 'g: <input type=range id=inpG title="default ' + app.g + '" ' +
					'min=' + app.gMin + ' max=' + app.gMax + ' step=' + app.gStep + ' value=' + app.g + 
					' onmousemove=outG.value=inpG.value;updateMesh(); style=width:200px; > ' +
					'<input id=outG style=width:30px; onchange=inpG.value=outG.value;updateMesh(); value=' + app.g + ' ><br>'; 
			}

			if ( app.h ) { 
				divCon.innerHTML += 'h: <input type=range id=inpH title="default ' + app.h + '" ' +
					'min=' + app.hMin + ' max=' + app.hMax + ' step=' + app.hStep + ' value=' + app.h + 
					' onmousemove=outH.value=inpH.value;updateMesh(); style=width:200px; > ' +
					'<input id=outH style=width:30px; onchange=inpH.value=outH.value;updateMesh(); value=' + app.h + ' ><br>'; 
			}

			if ( app.R1 ) { 
				divCon.innerHTML += 'R1: <input type=range id=inpR1 title="default ' + app.R1 + '" ' +
					'min=' + app.R1Min + ' max=' + app.R1Max + ' step=' + app.R1Step + ' value=' + app.R1 + 
					' onmousemove=outR1.value=inpR1.value;updateMesh(); style=width:195px; > ' +
					'<input id=outR1 style=width:30px; onchange=inpR1.value=outR1.value;updateMesh(); value=' + app.R1 + ' ><br>'; 
			}

			if ( app.R2 ) { 
				divCon.innerHTML += 'R2: <input type=range id=inpR2 title="default ' + app.R2 + '" ' +
					'min=' + app.R2Min + ' max=' + app.R2Max + ' step=' + app.R2Step + ' value=' + app.R2 + 
					' onmousemove=outR2.value=inpR2.value;updateMesh(); style=width:195px; > ' +
					'<input id=outR2 style=width:30px; onchange=inpR2.value=outR2.value;updateMesh(); value=' + app.R2 + ' ><br>'; 
			}
			divCon.innerHTML += '<button onclick=ASFR.updateIframe("' + file + '"); >Reset</button>';
			

		}
		ASFR.ifr.src = '../equation-files/' + file + '/' + file + '.html';	
	}

	ASFR.updateRenderer = function() {
		app.renderer.shadowMapEnabled = true;
		app.renderer.shadowMapSoft = true;

		JATH.selectedObject.castShadow = true;
		JATH.selectedObject.receiveShadow = true;
	}

	ASFR.files = [
		['apple-surface','Apple Surface I'],
		['apple-surface-ii','Apple Surface III'],
		['bell','Bell'],
		['bell-polar','Bell Polar'],
		['bell-wave','Bell Wave'],
		['bent-horns','Bent Horns'],
		['bicorn-surface','Bicorn Surface'],
		['bohemian-dome','Bohemian Dome'],
		['bonan-jeener-klein-surface','Bonan Jeener Klein Surface *'],
		['borromean-rings','Borromean Rings'],
		['bow-curve','Bow Curve'],
		['boy-surface','Boy\'s Surface *'],
		['breather-surface','Breather Surface *'],
		['bullet-nose','Bullet Nose'],
		['catalan-surface','Catalan Surface *'],
		['catenoid','Catenoid'],
		['cone','Cone'],
		['cornucopia','Cornucopia'],
		['cosine-surface','Cosine Surface'],
		['cosine-surface-ii','Cosine Surface II'],
		['cosine-wave','Cosine Wave'],
		['costa-surface','Costa Surface'],
		['crescent','Crescent'],
		['cross-cap','Cross Cap'],
		['cross-cup','Cross Cup'],
		['cylinder','Cylinder'],
		['cylinder-cissoid','Cylinder Cissoid'],
		['cylinder-epicycloid','Cylinder Epicycloid'],
		['cylinder-gauss','Cylinder Gauss'],
		['cylinder-hypocycloid','Cylinder Hypocycloid'],
		['cylinder-lemniscate','Cylinder Lemniscate'],
		['cylinder-strophoid','Cylinder Strophoid'],
		['cylinder-witch-of-agnesi','Cylinder Witch of Agnesi'],
		['dini-surface','Dini Surface *'],
		['disc','Disc'],
		['double-cone','Double Cone'],
		['drop-i','Drop I'],
		['drop-ii','Drop II'],
		['dupin-cyclide','Dupin Cyclide'],
		['egg','Egg'],
		['eight-surface','Eight Surface'],
		['ellipsoid','Ellipsoid'],
		['enneper-surface','Enneper Surface'],
		['enneper-surface-polar','Enneper Surface Polar'],
		['facing-snail','Facing Snail'],
		['fish-surface','Fish Surface'],
		['folium','Folium'],
		['fresnel-elastic-surface','Fresnel Elastic Surface'],
		['funnel','Funnel'],
		['guimard-surface','Guimard Surface'],
		['handkerchief-surface','Handkerchief Surface'],
		['helicoid','Helicoid'],
		['henneberg-surface','Henneberg Surface'],
		['horn','Horn'],
		['hyperbolic-helicoid','Hyperbolic Helicoid'],
		['hyperbolic-octahedron','Hyperbolic Octahedron'],
		['hyperbolic paraboloid','Hyperbolic Paraboloid'],
		['hyperboloid','Hyperboloid'],
		['isolator','Isolator'],
		['jeener-klein-surface','Jeener Klein Surface'],
		['jet-surface','Jet Surface'],
		['kappa-surface','Kappa Surface'],
		['kidney-surface','Kidney Surface'],
		['klein-bottle','Klein Bottle'],
		['klein-cycloid','Klein Cycloid'],
		['kuen-surface','Kuen Surface'],
		['lemniscape','Lemniscape'],
		['lemon-surface','Lemon Surface'],
		['lochdiscus','Lochdiscus'],
		['lockdisk','Lockdisk'],
		['loop','Loop'],
		['maeder-owl','Maeder\'s Owl'],
		['menn-surface','Menn\'s Surface'],
		['milk carton','Milk Carton'],
		['mobius-band','Mobius Band'],
		['monkey-saddle','Monkey Saddle'],
		['nautilus','Nautilus'],
		['paper-bag','Paper Bag'],
		['paraboloid','Paraboloid'],
		['pillow-shape','Pillow Shape'],
		['piriform-surface','Piriform Surface'],
		['pisot-triaxial','Pisot Triaxial'],
		['plane','Plane'],
		['plucker-conoid','Plucker Conoid'],
		['pseudo-cross cap','Pseudo Cross Cap'],
		['pseudosphere','Pseudosphere'],
		['richmond-surface','Richmond Surface'],
		['roman-surface','roman Surface'],
		['roundabout','Roundabout'],
		['scherk-surface','Scherk Surface'],
		['seashell','Seashell'],
		['shoe-surface','Shoe Surface'],
		['sievert-surface','Sievert Surface'],
		['sine-cone','Sine cone'],
		['sine-surface','Sine Surface'],
		['sine-wave','Sine Wave'],
		['snail-surface','Snail Surface'],
		['soucoupoid','Soucoupoid'],
		['sphere-double','Spheredouble'],
		['sphere-i','Sphere-i'],
		['sphere-ii','Sphere II'],
		['sphere-iii','Sphere III'],
		['sphere-iv','Sphere iv'],
		['spiral-archimedes','Spiral Archimedes'],
		['spiral-fermat','Spiral Fermat'],
		['spiral-hyperbolic','Spiral Hyperbolic'],
		['spiral-logarithmic','Spiral Logarithmic'],
		['spiral-tanh','Spiral Tanh'],
		['spiral-wave','Spiral Wave'],
		['spring-i','Spring i'],
		['spring-ii','Spring II'],
		['steinbach-screw','Steinbach Screw'],
		['stiletto-surface','Stiletto Surface'],
		['swallow-surface','Swallow Surface'],
		['torus','Torus'],
		['torus-8','Torus 8'],
		['torus-astroid','Torus Astroid'],
		['torus-asymmetric','Torus Asymmetric'],
		['torus-bicorn i','Torus Bicorn I'],
		['torus-bicorn-ii','Torus Bicorn II'],
		['torus-braided','Torus Braided'],
		['torus-cardioid-i','Torus Cardioid I'],
		['torus-cardioid-ii','Torus Cardioid II'],
		['torus-cassinian-oval-i','Torus Cassinian Oval I'],
		['torus-cassinian-oval-ii','Torus Cassinian Oval II'],
		['torus-corrugated-i','Torus Corrugated I'],
		['torus-corrugated-ii','Torus Corrugated II'],
		['torus-elliptic','Torus Elliptic'],
		['torus-epicycloid-i','Torus Epicycloid i'],
		['torus-epicycloid-ii','Torus Epicycloid II'],
		['torus-gear','Torus Gear'],
		['torus-hypocycloid-i','Torus Hypocycloid i'],
		['torus-hypocycloid-ii','Torus Hypocycloid II'],
		['torus-knot','Torus Knot'],
		['torus-lemniscate-gerono-i','Torus Lemniscate Gerono i'],
		['torus-lemniscate-gerono-ii','Torus Lemniscate Gerono II'],
		['torus-lemniscate-i','Torus Lemniscate I'],
		['torus-lemniscate-ii','Torus Lemniscate II'],
		['torus-limpet','Torus Limpet'],
		['torus-nephroid-i','Torus Nephroid '],
		['torus-nephroid-ii','Torus Nephroid II'],
		['torus-piriform-i','Torus Piriform I'],
		['torus-piriform-ii','Torus Piriform II'],
		['torus-saddle','Torus Saddle'],
		['torus-spiral','Torus Spiral'],
		['torus-strangled-i','Torus Strangled I'],
		['torus-strangled-ii','Torus Strangled II'],
		['torus-tricuspoid-i','Torus Tricuspoid iI'],
		['torus-tricuspoid-ii','Torus Tricuspoid II'],
		['torus-twisted-eight','Torus Twisted Eight'],
		['torus-umbilic','Torus Umbilic'],
		['torus-wave','Torus Wave'],
		['tractroid','Tractroid'],
		['tranguloid-trefoil','Tranguloid Trefoil'],
		['trash-can','Trash Can'],
		['trefoil-knot','Trefoil Knot'],
		['trefoil-knot-ii','Trefoil Knot II'],
		['triaxial-hexatorus','Triaxial Hexatorus'],
		['triaxial-teardrop','Triaxial Teardrop'],
		['triaxial-tritorus','Triaxial Tritorus'],
		['triple-corkscrew i','Triple Corkscrew I'],
		['triple-corkscrew-ii','Triple Corkscrew II'],
		['triple-corkscrew-iii','Triple Corkscrew III'],
		['triple-point-twist','Triple Point Twist'],
		['twisted-heart','Twisted Heart'],
		['twisted-pipe-surface','Twisted Pipe Surface'],
		['twisted-sphere','Twisted Sphere'],
		['vase-and-spearhead','Vase and Spearhead'],
		['verrill-surface','Verrill Surface'],
		['wallis-conical edge','Wallis Conical Edge'],
		['wave','Wave'],
		['wave-sphere','Wave Sphere'],
		['whitney-umbrella','Hhitney Umbrella'],
		['worm','Worm'],
		['wreath','Wreath'],
		['zindler-conoid','Zindler\'s Conoid'] 
	];
