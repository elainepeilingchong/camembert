
Template.search.events({
  'load #search': function(event) {
		Session.set('search/keyword', "#####################################################");
  },
  'keyup #search': function(event) {
    Session.set('search/keyword', event.target.value);
	
	if (event.target.value=="")
	{
		Session.set('search/keyword', "#####################################################");
	};
	document.getElementById("result").style.display="block";
	
  }
//    'focus #search':function(event){
//        if(Session.set('search/keyword')=="")
//            {
//                (this).
//            }
//    }
});


Template.resultList.helpers({
    things: function () {
        var text = Session.get('search/keyword');
        console.log(text);
        if(text == undefined){
            return [];
        }
        else{
            var regexp = new RegExp(Session.get('search/keyword'), 'i');
            console.log(regexp);
            return Cities.find({name: regexp});

        }},

    activities: function () {
        var text = Session.get('search/keyword');
        if(text == undefined){
            return [];
        }
        else{
            var regexp = new RegExp(Session.get('search/keyword'), 'i');
            return Activities.find({name: regexp});
        }
    }
});
