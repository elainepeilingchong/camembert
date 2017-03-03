Template.addPlace.events({
       'submit form' : function(event){
          event.preventDefault(); 
           var cityId =$("#cityId").val();
          var name =$("#name").val();
           var nature = $(".nature").val();
          var description =$("#description").val();
           var activity = {
               name: name,
               nature: nature,
               editor: {
                   "_id": Meteor.userId(),
                   "email": Meteor.user().emails[0].address
               },
               picture: [],
               comments: [
                   {
                       "user": {
                           "_id": Meteor.userId(),
                           "email": Meteor.user().emails[0].address
                       },
                       "date": new Date(),
                       "text": "A place to check out !"
                   }
               ],
               description: description,
               url: ""
           };
          Activities.insert(activity,
                            function(error, results){
              var resultArray=Activities.findOne({_id:results});
              Cities.update({"_id": cityId
                    }, {$push: {
                            "activities": resultArray
                        }
                    });
                        Router.go('toActivities', { _id: results });
        });

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
