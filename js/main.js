const flighPath={
	curviness:1.25,
	autoRotate:true,
	values:[
		{x: 100, y:15},
		{x:250, y:55},
		{x:450,y:46},
		{x:550,y:59},
		// {x:400,y:54},
		// {x:450,y:60},
		// {x:550,y:50}
	]
};

const tween = new TimelineLite();

tween.add(
	TweenLite.to(".paper-plane", 1, {
	bezier:flighPath,
	ease:Power1.easeInOut 
	})  
);

const controller = new ScrollMagic.Controller();

const scene=new ScrollMagic.Scene({
	triggerElement:'.animation',
	duration:350,
})
// 1240
.setTween(tween)
// .addIndicators()
.addTo(controller);

// 2nd

const flighPath2={
	curviness:1.25,
	autoRotate:true,
	values:[
		{x:200,y:30},
		{x:300,y:50},
		{x:450,y:40},
		{x:500, y:50},
		// {x:100,y:100},
		// {x:30,y:200}
	]
};

const tween2 = new TimelineLite();

tween2.add(
	TweenLite.to(".paper-plane2", 1, {
	bezier:flighPath2,
	ease:Power1.easeInOut 
	})  
);

const controller2 = new ScrollMagic.Controller();

const scene2=new ScrollMagic.Scene({ triggerElement:'.animation2',
duration:350, })

.setTween(tween2)
// .addIndicators()
.addTo(controller2);