'use strict';

var AnimationController = require('../modules/AnimationController');

var Preloader = function() {

	var LoadImages = LoadImages || function(a, d, z) {
		a instanceof Array || (a = [a]);
		for (var e = a.length, f = 0, g = e; g--;) {
			var b = document.createElement("img");
			b.onload = function() {
				f++; 
				f >= e && isFunction(d) && d(z)
			};
			b.src = a[g]; 
		}
	}

	var isFunction = isFunction || function(functionToCheck) {
		var getType = {};
		return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
	}

	LoadImages([
		'http://openweathermap.org/img/w/01d.png',
		'http://openweathermap.org/img/w/02d.png',
		'http://openweathermap.org/img/w/03d.png',
		'http://openweathermap.org/img/w/04d.png',
		'http://openweathermap.org/img/w/09d.png',
		'http://openweathermap.org/img/w/10d.png',
		'http://openweathermap.org/img/w/11d.png',
		'http://openweathermap.org/img/w/13d.png',
		'http://openweathermap.org/img/w/50d.png',
		'http://openweathermap.org/img/w/01n.png',
		'http://openweathermap.org/img/w/02n.png',
		'http://openweathermap.org/img/w/03n.png',
		'http://openweathermap.org/img/w/04n.png',
		'http://openweathermap.org/img/w/09n.png',
		'http://openweathermap.org/img/w/10n.png',
		'http://openweathermap.org/img/w/11n.png',
		'http://openweathermap.org/img/w/13n.png',
		'http://openweathermap.org/img/w/50n.png'
	], this.imagesAreLoaded() );

};

Preloader.prototype.imagesAreLoaded = function() {

  	this.body = document.querySelector('body');

  	TweenMax.to(this.body , 0.5, {
  		autoAlpha: 1,
  		display: "block",
  		ease: Power2.easeInOut,
  		onComplete: function() {

  			this.animate = new AnimationController();
  			this.animate.start();
  		}
  	});

};

module.exports = Preloader;