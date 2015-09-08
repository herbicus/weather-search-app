'use strict';

var $ = require('jquery');
var DateController = require('../modules/DateController');
var template = require('../templates/weather-data.hbs');

var WeatherController = function() {

	this.query = '';

	this.query = $('input[name="query"]').val() || 'ann arbor';

	this.getWeatherData();

	$('form[name="citySearch"] button').on('click', function() {
		
		$('.wrapper').remove();
		this.getWeatherData();
	
	});

};

WeatherController.prototype.getWeatherData = function() {
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + this.query + "&mode=json&units=imperial",
		success:  function(data) {

			this.data = data;

			// console.log(this.data);

			this.wrapper = document.querySelector('.wrapper');
			this.wrapper.innerHTML = template(this.data);

			this.date = new DateController();

		},
		dataType: 'json'

	});
};

module.exports = WeatherController;
