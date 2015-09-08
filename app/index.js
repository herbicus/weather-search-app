'use strict';

var Site = require('./modules/Site');
var browser = require('bowser');

var site = new Site();






if (browser.mobile || browser.tablet) {

	console.log('your on a mobile device');

	TweenMax.set('.box',{ autoAlpha: 1 });

} else {

	console.log('your on your desktop');

	$('.box').on('click', function() {
		console.log('jquery worked');
		TweenMax.to(this, 0.5, {
			top: 10,
			ease: Power2.easeInOut
		});
	});

	//TweenMax.staggerTo('.animate', 0.35, { autoAlpha: 1, ease: Power4.easeIn }, 0.2);

}
