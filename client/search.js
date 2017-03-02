Session.setDefault('search',"");

Template.search.events({
    'submit form' : function(event)
    {
        event.preventDefault();
        Session.set('search', $("#search").val());
    }
    
});

Template.search.helpers({
    result : function()
    {
        if (Session.get('search')=="")
            return;
        var regex= new RegExp('^' + Session.get('search'));
        return Cities.find({name :regex});
    }
    
});