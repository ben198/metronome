var metrovars = function() {

	var clickEvent = function() {

		var field  = document.getElementById('beats').value,
		    button = document.getElementById('button'),
		    beats  = field;

		 field = '';
		 console.log(beats);
	}

	return  {
		myPublicProperty: "I'm accessible as YAHOO.myProject.myModule.myPublicProperty.",
		myPublicMethod: function () {
			YAHOO.log("I'm accessible as YAHOO.myProject.myModule.myPublicMethod.");
		}
	};

}();

