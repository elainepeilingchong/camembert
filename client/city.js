Meteor.startup(function() {
    GoogleMaps.load();
});
Template.city.helpers({
    isEvent: function (nature) {
        return (nature == "event");
    },
    isPlace: function (nature) {
        return (nature == "place");
    },
    mapOptions: function () {
        if (GoogleMaps.loaded()) {
            var temp = Cities.findOne({"_id": Template.parentData(1)._id});
            var x = temp.coordinates.long;
            var y = temp.coordinates.lat;
            console.log(x + ", " + y);
            return {
                center: new google.maps.LatLng(y, x),zoom:10
                // center: new google.maps.LatLng(-37.8136, 144.9631),zoom:10

            };
        }
    }
});

Template.city.onCreated(function() {
    GoogleMaps.ready('map', function(map) {
        console.log("I'm ready!");
    });
});

