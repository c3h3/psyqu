import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  // code to run on server at startup
});



Meteor.methods({
		'submitBig5Scale': function (big5) {
		console.log('new BIG5:', big5);
			Big5.insert(big5);
		}
});

 

