Template.addCity.events({
       'submit form' : function(event){
          event.preventDefault(); 
          var name =$("#name").val();
           var long=$("#long").val();
           var lat=$("#lat").val();
          var description =$("#description").val();
          Cities.insert({name : name , description: description
                        }, function(error, results){
                        Router.go('toPlaceForm', { _id: results });
        });
          $("#name").val("");
          $("#description").val("");
           $("#long").val("");
           $("#lat").val("");
          }
});

Template.addCity.helpers({
   allplaces: function()
    {
        return Cities.find();
    }
});


