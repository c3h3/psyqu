import { Meteor } from 'meteor/meteor';

Big5 = new Mongo.Collection("big5");

Meteor.userId = function () {
  return Accounts.userId();
};




Meteor.startup(() => {
  // code to run on server at startup
});



Meteor.methods({
		'submitBig5Scale': function (big5) {
		console.log('new BIG5:', big5);
			Big5.insert(big5);
		}
	});

 
// Meteor.subscribe("Big5");

// Meteor.publish ("Big5,function() {                               

//   return Big5.find({user:this.userId}); 
// });

