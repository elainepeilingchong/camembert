Template.reset.events({
    "click button" : function(){
        Meteor.call("reset");
    }
});
