(function() {

	'use strict';

	var button = document.getElementById('start'),
		less = document.getElementById('btn-left'),
		more = document.getElementById('btn-right'),
	    field = document.getElementById('beats').value,
	    theInterval,
	    beep = new Audio('sounds/beep.wav');
	
	button.onclick = function() {
		if(this.innerText === 'Stop') {
			this.innerText = 'Start';
			clearInterval(theInterval);
		} else {
		// field = document.getElementById('beats').value;
		// beats = field.value;
		// field.value = '';
		initialize(field);
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

	less.onclick = function() {
		var value = parseFloat(field) - 1;
		field = value.toString();
		document.getElementById('beats').value = field;
	};

	more.onclick = function() {
		var value = parseFloat(field) + 1;
		field = value.toString();
		document.getElementById('beats').value = field;
	};


})();
