(function(window, document){
	'use strict';
	var start = function(){
		var librery = {
			/*aqui van las funciones*/
		};
		return librery;
	}
	/*asignamos la libreria a objeto global*/
	if(typeof window.librery === 'undefined'){
		window.librery = window._=start();
	}else{
		console.log('se esta llamando la libreria nuevamente');
	}
})(window,document); 
 