function initMap() {
        var uluru = {lat: 47.873989, lng: -122.076777};
        var map = new google.maps.Map(document.getElementById('location-map'), {
          zoom: 11,
          center: uluru,
		  scrollwheel: false,
		  styles: [
				    {
				        "featureType": "administrative",
				        "elementType": "all",
				        "stylers": [ {"visibility": "off"} ]
				    },
				    {
				        "featureType": "administrative.locality",
				        "elementType": "labels",
				        "stylers": [ {"visibility": "simplified"} ]
				    },
				    {
				        "featureType": "landscape",
				        "elementType": "all",
				        "stylers": [
				            { "visibility": "simplified" },
				            { "hue": "#0066ff" },
				            { "saturation": 74 },
				            { "lightness": 100 }
				        ]
				    },
				    {
				        "featureType": "poi",
				        "elementType": "all",
				        "stylers": [ {"visibility": "simplified"} ]
				    },
				    {
				        "featureType": "poi.business",
				        "elementType": "labels",
				        "stylers": [ {"visibility": "off"} ]
				    },
				    {
				        "featureType": "poi.government",
				        "elementType": "all",
				        "stylers": [ {"visibility": "off"} ]
				    },
				    {
				        "featureType": "poi.park",
				        "elementType": "labels",
				        "stylers": [ {"visibility": "off"} ]
				    },
				    {
				        "featureType": "road",
				        "elementType": "all",
				        "stylers": [ {"visibility": "simplified"} ]
				    },
				    {
				        "featureType": "road.highway",
				        "elementType": "all",
				        "stylers": [
				            { "visibility": "simplified" },
				            { "weight": 0.6 },
				            { "saturation": -85 },
				            { "lightness": 61 }
				        ]
				    },
				    {
				        "featureType": "road.highway",
				        "elementType": "geometry",
				        "stylers": [
				            { "visibility": "on" },
				            { "weight": "1.5" }
				        ]
				    },
				    {
				        "featureType": "road.arterial",
				        "elementType": "all",
				        "stylers": [ {"visibility": "simplified"} ]
				    },
				    {
				        "featureType": "road.arterial",
				        "elementType": "labels",
				        "stylers": [ {"visibility": "off"} ]
				    },
				    {
				        "featureType": "road.local",
				        "elementType": "all",
				        "stylers": [ {"visibility": "on"} ]
				    },
				    {
				        "featureType": "road.local",
				        "elementType": "labels",
				        "stylers": [ {"visibility": "off"} ]
				    },
				    {
				        "featureType": "transit",
				        "elementType": "all",
				        "stylers": [ {"visibility": "simplified"} ]
				    },
				    {
				        "featureType": "water",
				        "elementType": "all",
				        "stylers": [
				            { "visibility": "simplified" },
				            { "color": "#5f94ff" },
				            { "lightness": 26 },
				            { "gamma": 5.86 }
				        ]
				    }
				]
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}


$(function(){

	function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}
	
	var $word = $("path#word");
	var $dot = $("path#dot");

	// prepare SVG
	pathPrepare($word);
	pathPrepare($dot);

	// init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#home", duration: "200%"})
					.setTween("#home > div.parallax", {y: "100%", ease: Linear.easeNone})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#scroll-over-1", duration: "160%"})
					.setTween("#scroll-over-1 > div", {y: "80%", ease: Linear.easeNone})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#scroll-over-2", duration: "160%"})
					.setTween("#scroll-over-2 > div", {y: "80%", ease: Linear.easeNone})
					.addTo(controller);

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}));  // draw dot for 0.1
		//.add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

	 new ScrollMagic.Scene({triggerElement: "#trigger1", duration: '300px', tweenChanges: true})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller)
					.on("end", function (event) {
					    $word.attr("class", "revealed");
					    $dot.attr("class", "revealed");
					    this.destroy();
					});


	$("#mobile-nav").on("click" , function(){
		$(this).parent().toggleClass("mobile-open");
		if( $(this).parent().hasClass("mobile-open") ) {
			KUTE.fromTo('#hamburger1', {path: '#hamburger1' }, { path: '#close1' }, {morphPrecision: 1}).start();
			KUTE.fromTo('#hamburger2', {path: '#hamburger2' }, { path: '#close1' }, {morphPrecision: 1}).start();
			KUTE.fromTo('#hamburger3', {path: '#hamburger3' }, { path: '#close2' }, {morphPrecision: 1}).start();
		} else {
			KUTE.fromTo('#hamburger1', { path: '#close1' }, {path: '#menu1' }, {morphPrecision: 1}).start();
			KUTE.fromTo('#hamburger2', { path: '#close1' }, {path: '#menu2' }, {morphPrecision: 1}).start();
			KUTE.fromTo('#hamburger3', { path: '#close2' }, {path: '#menu3' }, {morphPrecision: 1}).start();
		}
	});

	$("a:not(.external-link)").on("click", function(e){
		e.preventDefault();
		e.stopPropagation();
	})
})