Meteor.methods({
    initUploadServerForCity: function (name, lat, long, desc) {
        UploadServer.init({
            tmpDir: process.env.PWD + '/.uploads/tmp',
            uploadDir: process.env.PWD + '/public/images/' + name,
            checkCreateDirectories: true, //create the directories for you
            finished: function (req) {
                console.log(req);
                var fileName = "/images/" + name + "/" + req.name;
                console.log(fileName);
                // Insert the new city in the collection here
                Cities.insert({
                    _id: "c" + Cities.find({}).count(),
                    name: name,
                    coordinates: {
                        long: lat,
                        lat: long
                    },
                    description: desc,
                    picture: fileName,
                    activity: [] //push from uploadActivity
                });
            }
        });
    },
        activityPictures:function(){
        return Activities.aggregate([{
            $project:{
                name:1,
                nb:{
                    $size:"$picture"
                }
            }
        }]);
    },

    activityComment:function(){
        return Activities.aggregate([{
            $project:{
                name:1,
                nb:{
                    $size:"$comments"
                }
            }
        }]);
    }
});

