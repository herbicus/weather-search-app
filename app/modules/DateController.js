'use strict';

var DateController = function() {

	this.getCurrentDate();
	
	// tomorrow
	this.getNextDayOne(1);
	// day after tomorrow
	this.getNextDayTwo();
	// two days after today
	this.getNextDayThree();
	// three days after today
	this.getNextDayFour();
	// four days after today
	this.getNextDayFive();
	// five days after today
	this.getNextDaySix();

};

DateController.prototype.getCurrentDate = function() {

	this.currentDate = new Date();
	this.currentContainer = document.querySelector('.l-current-date');
	this.currentContainer.innerHTML = this.currentDate.toDateString();

};


DateController.prototype.getNextDayOne = function(days) {

	this.days = days;
	
	this.nexDayContainer = document.querySelector('.next-day-1');
	this.nextDayOne = new Date(this.currentDate = new Date() );
	this.nextDayOne.setDate(	this.currentDate.getDate()+this.days);
	this.nexDayContainer.innerHTML = this.nextDayOne.toDateString();

};

DateController.prototype.getNextDayTwo = function(days) {
	
	this.nexDayContainer = document.querySelector('.next-day-2');
	this.nextDayOne = new Date(this.currentDate = new Date() );
	this.nextDayOne.setDate(	this.currentDate.getDate()+2);
	this.nexDayContainer.innerHTML = this.nextDayOne.toDateString();

};

DateController.prototype.getNextDayThree = function(days) {
	
	this.nexDayContainer = document.querySelector('.next-day-3');
	this.nextDayOne = new Date(this.currentDate = new Date() );
	this.nextDayOne.setDate(	this.currentDate.getDate()+3);
	this.nexDayContainer.innerHTML = this.nextDayOne.toDateString();

};

DateController.prototype.getNextDayFour = function(days) {
	
	this.nexDayContainer = document.querySelector('.next-day-4');
	this.nextDayOne = new Date(this.currentDate = new Date() );
	this.nextDayOne.setDate(	this.currentDate.getDate()+4);
	this.nexDayContainer.innerHTML = this.nextDayOne.toDateString();

};

DateController.prototype.getNextDayFive = function(days) {
	
	this.nexDayContainer = document.querySelector('.next-day-5');
	this.nextDayOne = new Date(this.currentDate = new Date() );
	this.nextDayOne.setDate(	this.currentDate.getDate()+5);
	this.nexDayContainer.innerHTML = this.nextDayOne.toDateString();

};

DateController.prototype.getNextDaySix = function(days) {
	
	this.nexDayContainer = document.querySelector('.next-day-6');
	this.nextDayOne = new Date(this.currentDate = new Date() );
	this.nextDayOne.setDate(	this.currentDate.getDate()+6);
	this.nexDayContainer.innerHTML = this.nextDayOne.toDateString();

};

module.exports = DateController;
