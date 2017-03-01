Router.configure({
    layoutTemplate: "main",
    notFoundTemplate: "notFound"
});

Router.route("/", {
    template: "home", 
    data : function() {
    }
});

Router.route('/city/:_id', {
    template: "city",
    data: function () {
		return Cities.findOne({_id:this.params._id});
    }
});