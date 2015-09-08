'use strict';

var $ = require('jquery');
var DateController = require('../modules/DateController');

var template = require('../templates/weather-data.hbs');

var WeatherController = function() {

	var query = '';

	query = $('input[name="query"]').val() || 'ann arbor';



	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + query + "&mode=json&units=imperial",
		success:  function(data) {

			this.data = data;

			console.log(this.data);

			this.wrapper = document.querySelector('.wrapper');
			this.wrapper.innerHTML = template(this.data);

			this.date = new DateController();

		},
		dataType: 'json'

	});

	$('form[name="citySearch"] button').on('click', function() {
		
		$('.inner-wrap').remove();

		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + query + "&mode=json&units=imperial",
			success:  function(data) {

				this.data = data;

				console.log(this.data);

				this.wrapper = document.querySelector('.wrapper');
				this.wrapper.innerHTML = template(this.data);

				this.date = new DateController();

			},
			dataType: 'json'

		});
	});	

	// $.ajax({
	// 	url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + query + "&mode=json&units=imperial",
	// 	success:  function(data) {

	// 		this.data = data;

	// 		console.log(this.data);

	// 		this.wrapper = document.querySelector('.wrapper');
	// 		this.wrapper.innerHTML = template(this.data);

	// 		this.date = new DateController();

	// 	},
	// 	dataType: 'json'

	// });
};

module.exports = WeatherController;
