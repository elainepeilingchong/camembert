Template.commentSubmit.events({
    'submit form': function (event) {
        event.preventDefault();
        var actId  = $("#actid").val();
        var comment = $("#text").val();
        var userTemp = {
            _id: Meteor.userId(),
            email: Meteor.user().emails[0].address
        };

        Activities.update({"_id": actId},
            {
                $push: {comments: {user: userTemp, text: comment, date: new Date()}}
            }
        );
        $("#text").val("");
    }
});