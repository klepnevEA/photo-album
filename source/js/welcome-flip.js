// Welcome flip
var authFlip = (function () {
	var welcomeFlipper = $('.welcome'),
		welcomeFlipperHeader = $('.welcome-header'),
		welcomeButton = $('#flipToRegistration'),
		welcomeHomeButton = $('#flipToLogin');

	var flipFunc = function (target) {
		target.click(function(e){
			e.preventDefault();
			welcomeFlipper.toggleClass('hover');
			welcomeFlipperHeader.toggleClass('hover');
			
		});
	}

    return {
        flip: function () {
        	flipFunc(welcomeButton);
        	flipFunc(welcomeHomeButton);
        },
        flipBack: function (e) {
			if (!welcomeFlipper.is(e.target) && welcomeFlipper.has(e.target).length === 0 && !welcomeButton.is(e.target) ) {
			    welcomeFlipper.removeClass('hover');
			    welcomeFlipperHeader.removeClass('hover');
			}
        }
    }

}());

$(document).ready(function() {
	authFlip.flip();
});

$(document).mouseup(function(e){
	authFlip.flipBack(e);
});