Template.place.helpers({                    
    activities: function () {
        return Activities.find({nature:"place"});           
    },
    like : function() {
            var like = Activities.findOne({
            _id: Template.currentData()._id,
            likers: Meteor.user()._id});
            if(typeof like === "undefined")
                return "images/noLike.png";
            else 
                return "images/Like.png";
    }
  });


Template.place.events({                    
    'submit #delForm': function (event) {
        event.preventDefault();
         var id = $("#delete").val();
        alert(id);
       // Activitis.remove({_id:id})
    }
  });


Template.place.events({                    
    'submit form': function (event) {
        event.preventDefault();
         var id = $("#delete").val();
        alert(id);
       // Activitis.remove({_id:id})
    },
    'click #nL' : function(event){
        console.log("j'aime !"+ this.name);
        console.log("data:",Template.currentData());
        console.log("user:",Meteor.user())
        if(Meteor.userId() === null){
        }else{
       /* update({_id:Template.cerrentData()}*/
       var like = Activities.findOne({
           _id: Template.currentData()._id,
           likers: Meteor.user()._id
       });
            if(typeof like == "undefined")
                Activities.update({_id: Template.currentData()._id},
                                  {$push:{likers: Meteor.user()._id}});
            else 
                Activities.update({_id: Template.currentData()._id},
                                  {$pull:{likers: Meteor.user()._id}});
                
        /*activities.insert({
            like : 1 
        });*/
    }
    }
  });