function start(){
	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})


	

	

	const tl_braclet = new TimelineMax()
	tl_braclet.add("start")
	tl_braclet.from(".bracket_1", 1.1, {clip:`rect(0px 150px 600px 150px)`}, "start")
	tl_braclet.from(".bracket_2", 1.1, {clip:`rect(0px 0px 600px 150px)`}, "start")

	


	const tl_player = new TimelineMax()
	const actionY = "+=390"
	const jump = 1.6
	tl_player.from(".player_left", jump, {y:actionY, x:"-=150", ease:Power3.easeOut}, .15)
	tl_player.from(".player_right", jump, {y:actionY, x:"+=100", ease:Power3.easeOut}, .1)
	tl_player.from(".ball", jump, {y:actionY, ease:Power3.easeOut}, 0)


	tl.add(tl_braclet, 0)
	tl.add(tl_player, "-=.5")


	tl.add('ta', "-=.3")
	tl.from(".ta_1", .1, {opacity:0}, "ta")
	tl.from(".ta_2", .1, {opacity:0, scale:.65}, "+=.3")


	const tl_braclet_shake = new TimelineMax({repeat:2, yoyo:true})
	tl_braclet_shake.add("start")
	tl_braclet_shake.from(".bracket_1", .04, {x:"+=4", y:"+=2"}, "start")
	tl_braclet_shake.from(".bracket_2", .04, {x:"-=2", y:"-=4"}, "start")
	

	const tl_braclet_fall = new TimelineMax()
	tl_braclet_fall.add("start")
	tl_braclet_fall.to(".bracket_1", .6, {rotation:"+=11", y:"+=460"}, "start")
	tl_braclet_fall.to(".bracket_2", .7, {rotation:"+=11", y:"+=460"}, "start")
	
	tl.add(tl_braclet_shake, "ta+=.7")
	tl.add(tl_braclet_fall, '+=.2')

	
	tl.to(".frame1", .3, {opacity:0}, "+=1")

	tl.add(".f2")
	tl.set(".frame2", {opacity:1})
	tl.from(".phone", .5, {y:"+=290"})
	tl.from(".ill", .4, {scale:0}, "-=.2")

	
	tl.from(".tb", .01, {opacity:0}, "+=.2")
	tl.from(".cta", .01, {opacity:0}, "+=.4")

	// tl.gotoAndPlay(".f2")
	
}

start()



module.exports = {};

