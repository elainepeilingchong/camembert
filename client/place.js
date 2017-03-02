Template.place.helpers({                    
    activities: function () {
        return Activities.find({nature:"place"});           
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