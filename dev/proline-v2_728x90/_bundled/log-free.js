(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function start() {
	TweenLite.defaultEase = Power3.easeInOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.from(".ta_1", .01, { opacity: 0 }, "+=.2");
	tl.from(".ta_2", .01, { opacity: 0 }, "+=.7");

	var tl_braclet = new TimelineMax();
	tl_braclet.add("start");
	tl_braclet.from(".bracket_1", .7, { ease: Power1.easeOut, clip: "rect(0px 300px 90px 290px)" }, "start");
	tl_braclet.from(".bracket_2", .7, { ease: Power1.easeOut, clip: "rect(0px 480px 90px 480px)" }, "start");

	var tl_player = new TimelineMax();
	var actionY = "+=250";
	var jump = 4;
	tl_player.from(".player_left", jump, { x: 26, y: -10, scale: .51, ease: Power3.easeOut }, 0);
	tl_player.from(".player_right", jump, { x: 135, y: 5, scale: .45, ease: Power3.easeOut }, 0);

	// tl.add(tl_braclet, "+=1")
	// tl.add(tl_player, 0)

	tl.to(".frame1", .3, { opacity: 0 }, 3);

	tl.add(".f2");
	tl.set(".frame2", { opacity: 1 });
	tl.from(".phone", .5, { y: "+=100" });
	tl.from(".ill", .4, { scale: 0 }, "-=.2");

	tl.from(".tb", .01, { opacity: 0 }, "+=.2");
	tl.from(".cta", .01, { opacity: 0 }, "+=.4");

	// tl.gotoAndPlay(".f2")
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
