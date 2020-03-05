function start(){
	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})


	tl.from(".ta_1", .01, {opacity:0}, "+=.2")
	tl.from(".ta_2", .01, {opacity:0}, "+=.5")

	

	const tl_braclet = new TimelineMax()
	tl_braclet.add("start")
	tl_braclet.from(".bracket_1", .7, {ease:Power1.easeOut, clip:`rect(0px 140px 50px 130px)`}, "start")
	tl_braclet.from(".bracket_2", .7, {ease:Power1.easeOut, clip:`rect(0px 210px 50px 200px)`}, "start")

	


	const tl_player = new TimelineMax()
	const actionY = "+=250"
	const jump = 4
	tl_player.from(".player_left", jump, {x:-10, y:3, scale:.5, ease:Power3.easeOut}, 0)
	tl_player.from(".player_right", jump, {x:20, y:4, scale:.5, ease:Power3.easeOut}, 0)
	


	// tl.add(tl_braclet, "+=1")
	// tl.add(tl_player, 0)


	
	tl.to(".frame1", .3, {opacity:0}, 3)

	tl.add(".f2")
	tl.set(".frame2", {opacity:1})
	tl.from(".phone", .5, {y:"+=100"})
	tl.from(".ill", .4, {scale:0}, "-=.2")

	
	// tl.from(".tb", .01, {opacity:0}, "+=.2")
	tl.from(".cta", .01, {opacity:0}, "+=.5")

	// tl.gotoAndPlay(".f2")
	
}

start()



module.exports = {};

