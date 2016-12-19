ymaps.ready(init);
var myMap;
var moscowPosition = [55.7522200, 37.6155600];

function init(){     
    myMap = new ymaps.Map ("map", {
        center: [moscowPosition[0]+0.002, moscowPosition[1]],
        zoom: 13
    });

    // var myPlacemark = new ymaps.Placemark([55.8, 37.6]);

    var myPlacemark = new ymaps.Placemark([55.754699, 37.619269], {}, {
      preset: 'twirl#redIcon' 
    });

    myMap.geoObjects.add(myPlacemark);
}