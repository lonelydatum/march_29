function start(){
	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})


	tl.from(".ta_1", .01, {opacity:0}, "+=.2")
	tl.from(".ta_2", .01, {opacity:0}, "+=.5")

	

	const tl_braclet = new TimelineMax()
	tl_braclet.add("start")
	tl_braclet.from(".bracket_1", .7, {ease:Power1.easeOut, clip:`rect(0px 300px 90px 290px)`}, "start")
	tl_braclet.from(".bracket_2", .7, {ease:Power1.easeOut, clip:`rect(0px 790px 250px 800px)`}, "start")

	


	const tl_player = new TimelineMax()
	const actionY = "+=250"
	const jump = 4
	tl_player.from(".player_left", jump, {x:-70, y:20, scale:1, ease:Power3.easeOut}, 0)
	tl_player.from(".player_right", jump, {x:80, y:13, scale:1, ease:Power3.easeOut}, 0)
	


	// tl.add(tl_braclet, "+=1")
	// tl.add(tl_player, 0)


	
	tl.to(".frame1", .3, {opacity:0}, 3)

	tl.add(".f2")
	tl.set(".frame2", {opacity:1})
	tl.from(".phone", .5, {y:"+=230"})
	tl.from(".ill", .6, {scale:0}, "-=.2")

	
	tl.from(".tb", .01, {opacity:0}, "+=.2")
	tl.from(".cta", .01, {opacity:0}, "+=.4")

	// tl.gotoAndPlay(".f2")
	
}

start()



module.exports = {};

