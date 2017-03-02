Cities = new Mongo.Collection("cities");
Activities = new Mongo.Collection("activities");
     
Meteor.methods({
comment : function (act_id,text) {
    var user = Meteor.user();
 
        if (!user)
      throw new Meteor.Error(401, "You need to login to make comments");
    if (!commentAttributes.body)
      throw new Meteor.Error(422, 'Please write some content');
    if (!post)
      throw new Meteor.Error(422, 'You must comment on a post');
     var comment = {"user._id":user._id,"user.email":user.email,date:new Date(),text:text}
     alert(comment);
Activities.update(
  {_id:act_id},{$push:{comments:comment}});
}});
