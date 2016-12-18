// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {

    var moscowPosition = [55.7522200, 37.6155600];

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(moscowPosition[0]+0.02, moscowPosition[1]), // Moscow
        styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}],
        disableDefaultUI: true
        // scrollwheel: false,
        // zoomControl: false,
        // scaleControl: false,
        // streetViewControl: false,
        // rotateControl: false,
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    // var marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(moscowPosition[0], moscowPosition[1]),
    //     map: map,
    //     title: 'Цель'
    // });
}