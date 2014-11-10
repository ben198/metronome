(function() {

	'use strict';

	var button = document.getElementById('button'),
	    beats,
	    theInterval,
	    beep = new Audio('sounds/beep.wav');
	
	button.onclick = function() {
		if(this.innerText === 'Stop') {
			this.innerText = 'Start';
			clearInterval(theInterval);
		} else {
		var field  = document.getElementById('beats');
		beats = field.value;
		field.value = '';
		initialize(beats);
		}
	};

	var beeper = function beeper() {
		beep.play();
	};

	var initialize = function initialize(bpm) {
		var time = (60 / bpm) * 1000;
		if(isNaN(bpm) || bpm === '') {
			console.log('Please enter a number');
		} else {
			button.innerText = 'Stop';
			beeper();
			theInterval = setInterval(beeper, time);
		}

	};


})();
