Template.addPlace.events({
       'submit form' : function(event){
          event.preventDefault(); 
           var cityId =$("#cityId").val();
          var name =$("#name").val();
           var nature = $(".nature").val();
          var description =$("#description").val();
          Activities.insert({name : name , nature:nature,description: description},
                            function(error, results){
                        Router.go('toActivities', { _id: results });
        });
          $("#name").val("");
          $("#description").val("");
          }
});


Template.addPlace.helpers({
    cityOption:function()
    {
       return Cities.find();
    },
    allplaces: function()
    {
        return Cities.find();
    }
});