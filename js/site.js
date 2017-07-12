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
	
	// init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#home"})
					.setTween("#home > div.parallax", {y: "80%", ease: Linear.easeNone})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#scroll-over-1"})
					.setTween("#scroll-over-1 > div", {y: "80%", ease: Linear.easeNone})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#scroll-over-2"})
					.setTween("#scroll-over-2 > div", {y: "80%", ease: Linear.easeNone})
					.addTo(controller);


	$("#mobile-nav").on("click" , function(){
		$(this).parent().toggleClass("mobile-open");
		//var tween = KUTE.fromTo('#hamburger', {path: '#hamburger' }, { path: '#close' }, {morphPrecision: 1}).start();
	});

	$("a:not(.external-link)").on("click", function(e){
		e.preventDefault();
		e.stopPropagation();
	})
})