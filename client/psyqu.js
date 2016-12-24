
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


Meteor.user = function () {
  return Accounts.user();
};

Tracker.autorun(function() {
    if(Meteor.userId()) {
        ///
    }
});


// Meteor.publish("collection", function() {
//     //returns undefined if not logged in so check if logged in first
//     if(this.userId) {
//         var user = Meteor.users.findOne(this.userId);
//         //var user is the same info as would be given in Meteor.user();
//     }
// });

Big5 = new Mongo.Collection("big5");


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


// Template.myScore.events({

// 	'click :SeeMyProfile':{
// 		var total = 0;

// 		Big5.find().map(function(doc) {
//   	    total += doc.allowedValues;
// });

// }

// Template.myScore.helpers({
//   'sum':function(){
//      var sum=0;
//      var cursor=Big5.find({user:Meteor.userId()});
//      cursor.forEach(function(transaction){
//        sum = sum + transaction.allowedValues
//      });
//      return sum;
//    }
// })








