Router.configure({
    layoutTemplate: "main",
    notFoundTemplate: "notFound"
});

Router.route("/", {
    template: "home"
});
Router.route("about", {
    template: "about"
});
Router.route("Cities", {
    template: "allCity"
});

Router.route('city/:_id', {
    template: "city",
    data: function () {
		return Cities.findOne({_id:this.params._id});
    }
});

Router.route('/activities/:_id', {
    name:"toActivities",
    template: "place",
    data: function () {
		return Activities.findOne({_id:this.params._id});
    }
});

Router.route('/addCity', {
    template: "addCity",
    data: function () {
		return this.params._id;
    }
});

Router.route('/addEvent/:_id', {
    template: "addEvent",
    data: function () {
		return Cities.findOne({_id:this.params._id});
    }
});

Router.route('/addPlace/:_id', {
    name:'toPlaceForm',
    template: "addPlace",
    data: function () {
		return Cities.findOne({_id:this.params._id});
    }
});


