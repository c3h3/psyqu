
//PurposeList.insert({purpose2: "Find a soulmate"})
//PurposeList.insert({purpose2: "Find flatmate"})
//PurposeList.insert({purpose2: "Find a friend"})
UserResult = new Mongo.Collection('user_result');


Router.route('/', {
    name: 'main',
    template:'main'
});

Router.route('/partner');
Router.route('/flatmate');
Router.route('/friend');


  
Router.route('/personality');
Router.route('/disclosure');
Router.route('/interests');


Big5.attachSchema(new SimpleSchema({
   talkative: {
      type: Number,
      allowedValues: [
         1,
         2,
         3,
         4,
         5,
      ],
      defaultValue: 1,
      label: "...is talkative",
        },
   fault: {
      type: Number,
      allowedValues: [
         1,
         2,
         3,
         4,
         5,
      ],
      defaultValue: 1,
      label: "...Tends to find fault with others",
        },
   thorough: {
      type: Number,
      allowedValues: [
         1,
         2,
         3,
         4,
         5,
      ],
      defaultValue: 1,
      label: "...Does a thorough job",
        },

   depressed: {
      type: Number,
      allowedValues: [
         1,
         2,
         3,
         4,
         5,
      ],
      defaultValue: 1,
      label: "...Is depressed, blue",
        },

   openMinded: {
      type: Number,
      allowedValues: [
         1,
         2,
         3,
         4,
         5,
      ],
      defaultValue: 1,
      label: "...Is original, comes up with new ideas",
        }

}));



Big5.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});


Template.personality.helpers({
  big5s: Big5.find()
})

Template.uid2email.helpers({
  email: function(uid){
    return Meteor.users.findOne({_id:uid}).emails[0].address
  }
})



Template.newScore.helpers({
  add: function(x,y){
    return x+y
  }
})


