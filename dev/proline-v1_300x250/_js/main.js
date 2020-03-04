function start(){
	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})


	tl.from(".ta_1", .01, {opacity:0}, "+=.2")
	tl.from(".ta_2", .01, {opacity:0}, "+=.3")

	

	const tl_braclet = new TimelineMax()
	tl_braclet.add("start")
	tl_braclet.from(".bracket_1", 1.1, {clip:`rect(0px 410px 160px 420px)`}, "start")
	tl_braclet.from(".bracket_2", 1.1, {clip:`rect(0px 440px 160px 290px)`}, "start")

	


	const tl_player = new TimelineMax()
	const actionY = "+=250"
	const jump = 1
	tl_player.from(".player_left", jump, {y:actionY, ease:Power3.easeOut}, .15)
	tl_player.from(".player_right", jump, {y:actionY, ease:Power3.easeOut}, .1)
	tl_player.from(".ball", jump, {y:actionY, ease:Power3.easeOut}, 0)


	tl.add(tl_braclet, "+=.8")
	tl.add(tl_player, "-=.7")


	
	tl.to(".frame1", .3, {opacity:0}, "+=1")

	tl.add(".f2")
	tl.set(".frame2", {opacity:1})
	tl.from(".phone", .5, {y:"+=100"})
	tl.from(".ill", .4, {scale:0}, "-=.2")

	
	tl.from(".tb", .01, {opacity:0}, "+=.2")
	tl.from(".cta", .01, {opacity:0}, "+=.4")

	// tl.gotoAndPlay(".f2")
	
}

start()



module.exports = {};

