Template.addEvent.events({
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
           $("#start").val("");
           $("#end").val("");
          }
});

Template.addEvent.helpers({
    allpersons : function()
    {
        return Activities.find();
    },
    cityOption:function()
    {
       return Cities.find();
    }

});
