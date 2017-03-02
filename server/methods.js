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
     alert("hello");
Activities.update(
  {_id:act_id},{$push:{comments:comment}});
}},{
    initUploadServerForCity: function (name, lat, long) {
        UploadServer.init({
            tmpDir: process.env.PWD + '/.uploads/tmp',
            uploadDir: process.env.PWD + '/public/images/' + name,
            checkCreateDirectories: true, //create the directories for you
            finished: function (req) {
                var fileName = "/images/" + name + "/" + req.name;
                Activities.pictures.push(fileName);
                
                // Insert the new city in the collection here
            }
        });
    }
});
