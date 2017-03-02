Template.place.helpers({                    
    activities: function () {
        return Activities.find({nature:"place"});           
    }
  });
