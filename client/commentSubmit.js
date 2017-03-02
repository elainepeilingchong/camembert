Template.commentSubmit.events({
       'submit form' : function(event){
          event.preventDefault(); 
    let idActivity = Template.currentData()._id;
  let  text=$("#text").val();
Meteor.call('comment',idActivity, text, function(error) {
      if (error){
          $("#text").val(error.reason);
       // throwError(error.reason);
      } else {
        $("#text").val("");
      }
    });
}
});