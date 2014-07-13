	var JA = {} || JA;

	JA.titleIcon = '<i class="fa fa-bomb"></i>';
	JA.TitleText = '"3D View-Maker"';

	JA.camX = 100;
	JA.camY = 100;
	JA.camZ = 100; 

	JA.tarX = 0;
	JA.tarY = 0;
	JA.tarZ = 0; 

	JA.addCSS = function() {
		var css = document.body.appendChild( document.createElement('style') );
		css.innerHTML = 'body { font: 600 12pt monospace; margin: 0; overflow: hidden; }' +
			'h1 { margin: 0; }' +
			'a { text-decoration: none; opacity: 0.8; }' +
			'#closer p { margin: 0; opacity: 0.8; }' +
			'#movable { background-color: #ccc; opacity: 0.8; cursor: move; left: 20px; min-width: 300px; max-height: ' + (window.innerHeight - 100) + 'px; ' +
				'overflow: auto; padding: 10px; position: absolute; top: 20px; z-index: 50; }' +
			'.button { background-color: #eee; outline: 1px #aaa solid; padding: 5px; }' +
		'';
	};

	JA.addMenu = function() {
		JA.menu = JA.container.appendChild( document.createElement( 'div' ) );
		JA.menu.id = 'movable';
		JA.menu.title = 'Move this menu panel around the screen or iconize it';
		JA.menu.addEventListener( 'mousedown', JA.mouseMove, false );
		JA.menu.innerHTML = '<a href=# id=closer ><p><i class="fa fa-bars"></i></p></a>' +
			'<h1>' +
				'<a href="" title=' + JA.TitleText + '>' + document.title + ' ' + JA.titleIcon + '</a> ' +
			'</h1>';

		closer.onclick = function() { JA.toggleMenu(); };
	};

	JA.addHR = function(){
		JA.hr = JA.menu.appendChild( document.createElement( 'hr' ) );
	};

	JA.addThreeFooter = function() {
		var footer = JA.menu.appendChild( document.createElement( 'div' ) );
		footer.style.cssText = 'cursor: auto;';
		footer.innerHTML =
			'<h2>' +
				'<a id=iconHome ><i class="fa fa-home"></i></a> ' +
			'</h2>'; 
		iconHome.title = "Reset to default view";
		iconHome.href = 'JavaScript:TATH.resetCamera();'
	};

	JA.toggleMenu = function(  ) {
		var toggle = JA.menu.children[1].style.display === 'none' ? '' : 'none';
		for (var i = 1; i < JA.menu.children.length; i++) {
			JA.menu.children[i].style.display = toggle;
		}
	};

	JA.toggleTab = function( tab ) {
		tab.style.display = tab.style.display === 'none' ? '' : 'none' ;
	};

	JA.toggleDialogs = function( dialog ) {
		var toggle = dialog.style.display;
		for (var i = 1, len = JA.container.children.length; i < len; i++) {
			JA.container.children[i].style.display = 'none';
		}
		dialog.style.display = toggle === 'none' ? '' : 'none';
	};

// events

	JA.onWindowResize = function () {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
		controls.handleResize(); // todo: verify if needed?
	}

	JA.mouseUp = function() {
		window.removeEventListener('mousemove', JA.divMove, true);
	};

	JA.mouseMove = function( event ){
		if ( event.target.id === 'movable' ) {
			event.preventDefault();

			offsetX = event.clientX - event.target.offsetLeft;
			offsetY = event.clientY - event.target.offsetTop;
			window.addEventListener('mousemove', JA.divMove, true);
		}
	};
// add move cursor 
	JA.divMove = function( event ){
		event.target.style.left = ( event.clientX - offsetX ) + 'px';
		event.target.style.top = ( event.clientY - offsetY ) + 'px';
	};
