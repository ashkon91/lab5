var data = require("../data.json");

exports.addFriend = function(req, res) {    
	console.log("addFriend called");

	var name = req.query.name;
	var desc = req.query.description;

	var tempFriend = {
		name: name,
		description: desc,
		imageURL: "http://lorempixel.com/500/500/people"
	}

	data.friends.push(tempFriend);
	//Take you back to index route
	res.redirect('/');
 }