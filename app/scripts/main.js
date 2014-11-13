(function() {

	'use strict';

	var button = document.getElementById('start'),
		less   = document.getElementById('btn-left'),
		more   = document.getElementById('btn-right'),
		clear  = document.getElementById('clearBtn'),
	    field  = document.getElementById('beats'),
	    box    = [],
	    theInterval,
	    strike,
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
		if (field.value > 1) {
			var value = parseFloat(field.value) - 1,
			    holder = value.toString();
			field.value = holder;
			holder = holder.split('');
			box.splice(0, 3);
			for (var i = 0; i < holder.length; i += 1) {
				box.push(holder[i]);
			}
		}
	};

	more.onclick = function() {
		if (field.value === '') {
			field.value = '29';
		}
		// if (field.value < 230) {
			var value = parseFloat(field.value) + 1,
			    holder = value.toString();
			field.value = holder;
			holder = holder.split('');
			box.splice(0, 3);
			for (var i = 0; i < holder.length; i += 1) {
				box.push(holder[i]);
			}
		// }
	};

	function numberGenerator(number, storage) {
		if (storage.length < 3) {
			storage.push(number);
		} else if (number > 0) {
			storage.splice(0, 3, number);
		}
		return storage;
	};

	var keypadHandler = function keypadHandler() {
		var i,
		    keypad = document.getElementsByClassName('keypadBtn');
		for (i = 0; i < keypad.length; i += 1) {
	    	keypad[i].onclick = function() {
	    		var value  = parseFloat(field.value) + 1,
	    		    num    = this.innerText;
	    		    strike = numberGenerator(num, box);
	    		var stroke = strike.map(Number),
	    		    strack = stroke.join('');
	    			smash(strike);
	    	}
	    };
	}();
	

	var smash = function smash(container) {
		var f = container.join('');
			field.value = f;
	};


})();
