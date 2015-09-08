
'use strict';

var colors = require('../colors');
var TweenMax = require('TweenMax');

// animation controller object constructor
var AnimationController = function() {

  this.box = document.querySelector('.box');
  this.mainIcon = document.querySelector('.l-main-icon');
  this.cityName = document.querySelector('.two-col h2');
  this.mainTemp = document.querySelector('.two-col h1');
  
  this.init();

};

AnimationController.prototype.firstAnimation = function() {

  var tl = new TimelineMax();

  tl.to (this.cityName, 0.35, {autoAlpha: 1, top: 0, ease:Power4.easeOut});
  tl.to (this.mainIcon, 0.35, {autoAlpha: 1, top: 0, ease:Back.easeInOut}, 0.075);
  tl.to(this.mainTemp, 0.35, {autoAlpha: 1, top: 0, ease:Power4.easeOut}, 0.125);
  tl.staggerTo ('.six-col', 0.35, {autoAlpha: 1, top: 0, ease:Back.easeInOut}, 0.125, 0.15);
  tl.staggerTo ('.day-title', 0.35, {autoAlpha: 1, top: 0, ease:Power2.easeOut}, 0.135, 0.25);
  tl.staggerTo ('.l-weather-icon', 0.35, {autoAlpha: 1, top: 0, ease:Power2.easeOut}, 0.14, 0.35);
  tl.staggerTo ('.forecast-temp', 0.35, {autoAlpha: 1, top: 0, ease:Power2.easeOut}, 0.15, 0.35);
  
  
  return tl;

};

// initialize banner
AnimationController.prototype.init = function() {

  console.log('%c:: animation init ::', colors.red);

  this.tl = new TimelineMax({paused: true});

  this.tl.add(this.firstAnimation());

  return this.tl;

};

// start animation
AnimationController.prototype.start = function() {

  this.tl.play();
  console.log('%c:: animation start ::', colors.green);

};

module.exports = AnimationController;
