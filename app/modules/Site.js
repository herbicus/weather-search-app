'use strict';
var Preloader = require('../modules/Preloader');
var WeatherController = require('../modules/WeatherController');
var colors = require('../colors');
var config = require('../config');

var Site = function() {

	this.weatherController = new WeatherController();

	this.loader = new Preloader();

};

module.exports = Site;
