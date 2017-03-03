Template.addCity.events({
       'submit form' : function(event){
          event.preventDefault();
          var name =$("#name").val();
           var long=$("#long").val();
           var lat=$("#lat").val();
          var description =$("#description").val();
           Cities.insert({
               _id: "c" + Cities.find({}).count(),
               name: name,
               coordinates: {
                   long: lat,
                   lat: long
               },
               description: description,
               picture: [],
               activity: [] //push from uploadActivity
           },function(error, results){
               Router.go("/addPlace/"+results);
           });
          }
});
Template.addCity.helpers({
   allplaces: function()
    {
        return Cities.find();
    }
});

