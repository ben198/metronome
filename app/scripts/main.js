(function() {

	'use strict';

	var button = document.getElementById('start'),
		less   = document.getElementById('btn-left'),
		more   = document.getElementById('btn-right'),
		clear  = document.getElementById('clearBtn'),
	    field  = document.getElementById('beats'),
	    theInterval,
	    beep = new Audio('sounds/beep.wav');

	var theSwitch = function theSwitch() {
		if(button.innerText === 'Stop') {
			button.innerText = 'Start';
			clearInterval(theInterval);
		} else {
		initialize(field.value);
		}
	};
	
	button.onclick = function () {
		return theSwitch();
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
		if (field.value === '') {
			field.value = '31';
		}
		if (field.value > 30) {
			var value = parseFloat(field.value) - 1;
			field.value = value.toString();
		}
	};

	more.onclick = function() {
		if (field.value === '') {
			field.value = '29';
		}
		if (field.value < 230) {
			var value = parseFloat(field.value) + 1;
			field.value = value.toString();
		}
	};

	clear.onclick = function() {
		// field.value = '';
		// theSwitch();
		console.log(typeof(field.value));
	};

	function numberGenerator(number, storage) {
		if (storage.length < 3) {
			storage.push(number);
		} else if (number > 0) {
			storage.splice(0, 3, number);
		}
		return storage;
	};

	// function totalArray(array) {
	// 	var i, total = 0;
	// 	for (i = 0; i < array.length; i += 1) {
	// 		total += array[i];
	// 	}
	// 	return total;
	// };

	var keypadHandler = function keypadHandler() {
		var i,
			box    = [],
		    keypad = document.getElementsByClassName('keypadBtn');
		for (i = 0; i < keypad.length; i += 1) {
	    	keypad[i].onclick = function() {
	    		var value  = parseFloat(field.value) + 1,
	    		    num    = this.innerText,
	    		    strike = numberGenerator(num, box),
	    		    stroke = strike.map(Number),
	    		    strack = stroke.join('');
	    		    // tot    = totalArray(stroke);
	    		if (strack < 231) {
	    			smash(strike);
	    		}
	    		console.log(strack);
	    		// box.push(this.innerText);
	    		// smash(box);
	    	}
	    };
	    // return function flipper() {
	    // 	return box;
	    // }
	}();
	

	var smash = function smash(container) {
		var f = container.join('');
		// if (f < 231) {
			field.value = f;
		// }
	};


})();
