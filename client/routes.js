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
        console.log(this.params.id)
        // The value of this id is given by  this.params.id
    }
});