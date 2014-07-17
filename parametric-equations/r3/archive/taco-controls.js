	var TACO = {} || TACO;

	TACO.addControls = function() {
		TACO.panel = JA.menu.appendChild( document.createElement( 'div' ) );
		TACO.panel.innerHTML =
			'<h1 style=text-align:center; >' +
				'<a href=JavaScript:TACO.gotoFrame(0); ><i class="fa fa-fast-backward"></i></a> ' +
				' <a href=JavaScript:TACO.gotoFrame(SOFR.frame-2); ><i class="fa fa-step-backward"></i></a> ' +
				' <a id=iconRun href=JavaScript:TACO.toggleRunning(); ><i class="fa fa-play" ></i></a>' +
				' <a href=JavaScript:TACO.gotoFrame(SOFR.frame); ><i class="fa fa-step-forward"></i></a> ' +
				' <a href=JavaScript:TACO.gotoFrame(SOFR.heights.length-2); ><i class="fa fa-fast-forward"></i></a> ' +
			'</h1>' +
		''; 
	};

	TACO.toggleRunning = function() {
		if ( JA.running === false ) {
			JA.running = true;
			iconRun.innerHTML = '<i class="fa fa-pause"  ></i>';
		} else {
			JA.running = false;
			iconRun.innerHTML = '<i class="fa fa-play"  ></i>';	
		}
	};

	TACO.gotoFrame = function( number ) {
			SOFR.startTime = new Date();
			SOFR.frame = number;
			JA.update();
	};