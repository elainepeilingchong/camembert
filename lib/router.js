Router.map(function () {  
  this.route('post/:id', {
      waitOn: function() {
        return [
            Meteor.subscribe('post', this.params.id),
            Meteor.subscribe('postComments', this.params.id)
        ]
      },

      data: function() {
        return {
            post: Posts.findOne({_id: this.params.id}),
            comments: Comments.find({postId: this.params.id})
        }
      }
  });
});