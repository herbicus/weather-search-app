
'use strict';

var colors = require('../colors');
var TweenMax = require('TweenMax');

// animation controller object constructor
var AnimationController = function() {

  this.box = document.querySelector('.box');
  this.sixCol = document.querySelector('.six-col');
  
  this.init();

};

AnimationController.prototype.firstAnimation = function() {

  var tl = new TimelineMax();

  tl.staggerTo ('.six-col', 0.35, {autoAlpha: 1, top: 0, ease:Back.easeInOut}, 0.15);
  tl.staggerTo ('.day-title', 0.35, {autoAlpha: 1, top: 0, ease:Power2.easeOut}, 0.15, 0.25);
  tl.staggerTo ('.l-weather-icon', 0.35, {autoAlpha: 1, top: 0, ease:Power2.easeOut}, 0.25, 0.15);
  
  
  // tl.to (this.box, 0.75, {autoAlpha: 1, left: 20, ease: Power2.easeOut});
  
  // tl.to (this.box, 0.75, {autoAlpha: 0.5, top: 20, ease: Power2.easeOut});
  // tl.to (this.box, 0.75, {autoAlpha: 1, left: 0, top: 0, ease: Power4.easeOut});

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
