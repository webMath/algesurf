var list = {
// avoid using -,/_
// use same capitalization

	'1 The Project': {
		'': [
			[ 'Overview', 'overview/index', 'image' ],
			[ 'Features & Futures', 'overview/features'],
			[ 'Credits', 'overview/credits'],
		],	
	},
	
	'2 Algesurf R3': {
		'In Development...': [
			[ 'Read Me', 'r3/readme']
		]
	},
	
	'3 Algesurf R2': {
		'Overview': [
			[ 'Read Me', 'r2/readme'],
			[ 'Algesurf Builder', 'r2/1-Overview/Builder',],
			//[ 'Case Study: Math', 'r2/1-Overview/Case Study Math'],
			//[ 'Features & Futures', 'r2/1-Overview/Features'],
			//[ 'Credits', 'r2/1-Overview/Credits'],
			[ 'Player - sequence', 'r2/1-Overview/Player'],
			// [ 'Player - single', 'r2/1-Overview/Player','?title=stemkoski&play=10&spin=0'],
			[ 'Multiple Viewport Demo', 'r2/1-Overview/Multiple Viewport Demo']
		],
		'Hauser Gallery': [
			[ 'Read Me', 'r2/2-Hauser/Read Me'],
			[ 'Hauser 1', 'r2/2-Hauser/1hauser'],
			[ 'Hauser 2', 'r2/3-Hauser/2hauser'],
			// [ '', 'r2/Hauser 1/'],
		],

		'Jalape Gallery': [
			[ 'Read Me', 'r2/4-Jalape/read-me-jalape'],
			[ 'Jalape', 'r2/4-Jalape/1jalape']
		],
		
		'XY Surface': [
			[ 'Read Me', 'r2/5-XY-Surface/read-me-xy-surface'],
			[ 'XY Surface', 'r2/5-XY-Surface/xy-surface']
		],		
	},
	
	'4 Algesurf R1': {
		'': [
			[ 'Read Me', 'r1/readme'],
			[ 'Algesurf Builder', 'r1/index'],
			[ 'Algesurf Player', 'r1/algesurf-player'],
			[ 'Algesurf Frames', 'r1/algesurf-frame']
		]		
	}
};

var pages = {};

for ( var section in list ) {
	pages[ section ] = {};
	for ( var category in list[ section ] ) {
		pages[ section ][ category ] = {};
		for ( var i = 0; i < list[ section ][ category ].length; i ++ ) {
			var page = list[ section ][ category ][ i ];
			pages[ section ][ category ][ page[ 0 ] ] = page[ 1 ];
		}
	}
}
// console.log('list: ', list, pages );