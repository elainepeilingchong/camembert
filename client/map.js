//Meteor.startup(function () {
//    GoogleMaps.load();
//});
//
//Template.map.helpers({
//    mapOptions: function () {
//        if (GoogleMaps.loaded()) {
//            var temp = Cities.findOne({"_id": Router.current().params.id});
//            var x = temp.coordinates.long;
//            var y = temp.coordinates.lat;
//            console.log(x + ", " + y);
//            return {
//                center: new google.maps.LatLng(x, y),
//                // center: new google.maps.LatLng(-37.8136, 144.9631),
//                zoom: 8
//            };
//        }
//    }
//});
//
//Template.map.onCreated(function () {
//    GoogleMaps.ready('map', function (map) {
//        console.log("I'm ready!");
//    });
//});
