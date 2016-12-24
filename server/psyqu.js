import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  // code to run on server at startup
});



Meteor.methods({
		'submitBig5Scale': function (data) {
		console.log('new BIG5:', data);
      data.userId = Meteor.userId()
			Big5.insert(data);
		}
});

 

