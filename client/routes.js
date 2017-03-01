Router.configure({
    layoutTemplate: "main",
    notFoundTemplate: "notFound"
});

Router.route("/", {
    template: "home"
});

Router.route('/city/:id', {
    template: "city",
    data: function () {
        Console.log(this.params.id)
		//Cities.findOne (_id:this.params.id);
		return (name : 'Aix', weather : 'sun')
    }
});

