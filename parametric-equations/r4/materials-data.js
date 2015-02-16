	var materials;

	function materialsInit() {

		var r = "../../../textures/cube/skybox/";
		var pw = '../../../textures/pure-white.png';
		var lt = '../../../textures/lavatile.jpg';
		var d = '../../../textures/disturb.jpg';
		var urls = [ r + "px.jpg", r + "nx.jpg", r + "py.jpg", r + "ny.jpg", r + "pz.jpg", r + "nz.jpg" ];

		textureCube = THREE.ImageUtils.loadTextureCube( urls );
		textureCube.format = THREE.RGBFormat;

		var color =  Math.random() * 0xffffff;

		materials = {
//			'<Standard': '<div><h3 style=display:inline; >Car Colors</h3> <a href=http://mrdoob.github.io/three.js/examples/#webgl_materials_cars target="_blank" ><i>source</i></a></div>',
// http://mrdoob.github.io/three.js/examples/#webgl_materials_cars

			"Orange": 	new THREE.MeshLambertMaterial( { color: 0xff6600, ambient: 0xff2200, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.3 } ),
			"Blue": 	new THREE.MeshLambertMaterial( { color: 0x001133, ambient: 0x001133, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.3 } ),
			"Red": 		new THREE.MeshLambertMaterial( { color: 0x660000, ambient: 0x330000, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.25 } ),
			"Black": 	new THREE.MeshLambertMaterial( { color: 0x000000, ambient: 0x000000, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.15 } ),
			"White":	new THREE.MeshLambertMaterial( { color: 0xffffff, ambient: 0x666666, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.25 } ),

			"Carmine": 	new THREE.MeshPhongMaterial( { color: 0x770000, specular:0xffaaaa, envMap: textureCube, combine: THREE.MultiplyOperation } ),
			"Gold": 	new THREE.MeshPhongMaterial( { color: 0xaa9944, specular:0xbbaa99, shininess:50, envMap: textureCube, combine: THREE.MultiplyOperation } ),
			"Bronze":	new THREE.MeshPhongMaterial( { color: 0x150505, specular:0xee6600, shininess:10, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.25 } ),
			"Chrome": 	new THREE.MeshPhongMaterial( { color: 0xffffff, specular:0xffffff, envMap: textureCube, combine: THREE.MultiplyOperation } ),

//			'<metal' : '<br>',
			"Orange metal": new THREE.MeshLambertMaterial( { color: 0xff6600, ambient: 0xff2200, envMap: textureCube, combine: THREE.MultiplyOperation } ),
			"Blue metal": 	new THREE.MeshLambertMaterial( { color: 0x001133, ambient: 0x002266, envMap: textureCube, combine: THREE.MultiplyOperation } ),
			"Red metal": 	new THREE.MeshLambertMaterial( { color: 0x770000, envMap: textureCube, combine: THREE.MultiplyOperation } ),
			"Green metal": 	new THREE.MeshLambertMaterial( { color: 0x007711, envMap: textureCube, combine: THREE.MultiplyOperation } ),
			"Black metal":	new THREE.MeshLambertMaterial( { color: 0x222222, envMap: textureCube, combine: THREE.MultiplyOperation } ),

//			'<chrome>' : '<br>',
			"Pure chrome": 	new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: textureCube } ),
			"Dark chrome":	new THREE.MeshLambertMaterial( { color: 0x444444, envMap: textureCube } ),
			"Darker chrome":new THREE.MeshLambertMaterial( { color: 0x222222, envMap: textureCube } ),

//			'<glass>' : '<br>',
			"Black glass": 	new THREE.MeshLambertMaterial( { color: 0x101016, envMap: textureCube, opacity: 0.975, transparent: true } ),
			"Dark glass":	new THREE.MeshLambertMaterial( { color: 0x101046, envMap: textureCube, opacity: 0.25, transparent: true } ),
			"Blue glass":	new THREE.MeshLambertMaterial( { color: 0x668899, envMap: textureCube, opacity: 0.75, transparent: true } ),
			"Light glass":	new THREE.MeshBasicMaterial( { color: 0x223344, envMap: textureCube, opacity: 0.25, transparent: true, combine: THREE.MixOperation, reflectivity: 0.25 } ),

			"Red glass":	new THREE.MeshLambertMaterial( { color: 0xff0000, opacity: 0.75, transparent: true } ),
			"Yellow glass":	new THREE.MeshLambertMaterial( { color: 0xffffaa, opacity: 0.75, transparent: true } ),
			"Orange glass":	new THREE.MeshLambertMaterial( { color: 0x995500, opacity: 0.75, transparent: true } ),

			"Orange glass 50":	new THREE.MeshLambertMaterial( { color: 0xffbb00, opacity: 0.5, transparent: true } ),
			"Red glass 50": 	new THREE.MeshLambertMaterial( { color: 0xff0000, opacity: 0.5, transparent: true } ),

//			'<rough>' : '<br>',
			"Fullblack rough":	new THREE.MeshLambertMaterial( { color: 0x000000 } ),
			"Black rough":		new THREE.MeshLambertMaterial( { color: 0x050505 } ),
			"Darkgray rough":	new THREE.MeshLambertMaterial( { color: 0x090909 } ),
			"Red rough":		new THREE.MeshLambertMaterial( { color: 0x330500 } ),

//			'<shiny' : '<br>',
			"Darkgray shiny":	new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x050505 } ),
			"Gray shiny":		new THREE.MeshPhongMaterial( { color: 0x050505, shininess: 20 } ),

//		};



//		matLib2 = {
//			'<specials' : '<h3>Specials</h3>',
			'Normal':			new THREE.MeshNormalMaterial(),
			'Liquid': 			new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: textureCube, refractionRatio: 0.85 } ),
			'Plastic':			new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x888888, ambient: 0x000000, shininess: 250, side: THREE.DoubleSide } ),
			"Normal Smooth":	new THREE.MeshNormalMaterial( { shading: THREE.SmoothShading, side: 2 }),
			"Normal Flat":		new THREE.MeshNormalMaterial( { shading: THREE.FlatShading, side: 2 } ),
			"Normal Wireframe":	new THREE.MeshNormalMaterial( { shading: THREE.FlatShading, side: 2, wireframe: true } ),
			"Basic Flat Red":	new THREE.MeshBasicMaterial( { color: 0xff0000, shading: THREE.FlatShading, side: 2 }),
			"Lambert Smooth Random": new THREE.MeshLambertMaterial( { ambient: color, color: color, emissive: color, shading: THREE.SmoothShading, side: 2 }),

//			'<phong' : '<br>',
			"Phong Default":	new THREE.MeshPhongMaterial(),
			"Phong Random Smooth": new THREE.MeshPhongMaterial( {
				ambient: 0xffffff * Math.random(),
				color: 0xffffff * Math.random(),
				emissive: 0x333333 * Math.random(),
				metal: Math.floor( 2 * Math.random() ),
				opacity: 0.2 + 0.8 * Math.random().toFixed(2),
				shading: THREE.SmoothShading,
				shininess: ( 200 * Math.random() ).toFixed(0),
				specular: 0x888888 * Math.random(),
				transparent: true,
				wireframe: Math.floor( 1.1 * Math.random() )
			} ),
			"Phong Red Plastic": new THREE.MeshPhongMaterial( {
				ambient: 0xff0000,
				color: 0xff0000,
				emissive: 0x330000,
				metal: true,
				opacity: 1,
				shading: THREE.SmoothShading,
				shininess: 250,
				specular: 0xff5555,
				transparent: false,
				wireframe: false
			} ),
			"Phong Blue Flat": new THREE.MeshPhongMaterial( {
				ambient: 0x0000ff,
				color: 0x0000ff,
				emissive: 0x000055,
				shading: THREE.FlatShading,
				shininess: 10,
				specular: 0x550000
			} ),
			"Phong Purple Flat": new THREE.MeshPhongMaterial( {
				ambient: 0x888800,
				color: 0xdd00ff,
				emissive: 0x220033,
				shading: THREE.FlatShading,
				shininess: 10,
				specular: 0x009900
			}),
			"Phong Green Smooth": new THREE.MeshPhongMaterial( {
				ambient: 0x03aa03,
				color: 0xddffdd,
				emissive: 0x005500,
				reflectivity: 1,
				shading: THREE.SmoothShading,
				shininess: 10,
				specular: 0x009900
			}),
			"PhongDefaultTextureLavatile": new THREE.MeshPhongMaterial( { map: new THREE.ImageUtils.loadTexture( lt ) } ),
			"PhongWhiteTextureWhite": new THREE.MeshPhongMaterial( { color: 0xffffff, map: new THREE.ImageUtils.loadTexture( pw ) } ),
			"PhongDefaultTextureSquare": new THREE.MeshPhongMaterial( { map: new THREE.ImageUtils.loadTexture( '../../../textures/square.png' ), opacity: 0.5, transparent: true } ),
			"PhongDefaultTextureUVgrid": new THREE.MeshPhongMaterial( { map: new THREE.ImageUtils.loadTexture( '../../../textures/ash_uvgrid01.jpg' ) } ),
			"PhongWhiteTextureDisturb": new THREE.MeshPhongMaterial( { map: new THREE.ImageUtils.loadTexture( '../../../textures/disturb.jpg' ) } ),
			"PhongWhiteTextureCar": new THREE.MeshPhongMaterial( { map: new THREE.ImageUtils.loadTexture( '../../../textures/im5.jpg' ) } ),

//			'<envmap' : '<br>',
			"Phong Default Reflect White": new THREE.MeshPhongMaterial( { envMap: new THREE.ImageUtils.loadTextureCube( [ pw,pw,pw,pw,pw,pw ] )   } ),

			"Phong Random Reflect Lava": new THREE.MeshPhongMaterial( { 
				envMap: new THREE.ImageUtils.loadTextureCube( [ lt,lt,lt,lt,lt,lt ] ),
				ambient: 0xffffff * Math.random(),
				color: 0xff0000, //0xffffff * Math.random(),
//				combine: THREE.MixOperation,
				emissive: 0x222222,
				metal: true,
				opacity: 0.9,
				shading: THREE.SmoothShading,
				reflectivity: 1,
				shininess: 50,
				side: THREE.DoubleSide,
				specular: 0xffffff * Math.random(),
				transparent: true
			} ),

			"Phong Reflect Disturb": new THREE.MeshPhongMaterial( { envMap: new THREE.ImageUtils.loadTextureCube( [ d,d,d,d,d,d ] )   } )

// 			"": new THREE.MeshPhongMaterial( { envMap: new THREE.ImageUtils.loadTextureCube( [ '../../textures/lavatile.jpg', '../../textures/lavatile.jpg', '../../textures/lavatile.jpg', '../../textures/lavatile.jpg', '../../textures/lavatile.jpg', '../../textures/lavatile.jpg' ] )   } )

		};

	}

/*
http://mrdoob.github.io/three.js/docs/#Reference/Materials/MeshPhongMaterial
materials.push( new THREE.MeshPhongMaterial( { ambient: 0x030303, color: 0xdddddd, specular: 0x009900, shininess: 30, shading: THREE.FlatShading } ) );
*/
