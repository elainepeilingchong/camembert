Router.configure({
    layoutTemplate: "main",
    notFoundTemplate: "notFound"
});

Router.route("/", {
    template: "home", 
});
Router.route("/about", {
    template: "about", 
});
Router.route("/Cities", {
    template: "allCity", 
});
Router.route('/city/:_id', {
    template: "city",
    data: function () {
		return Cities.findOne({_id:this.params._id});
    }
});