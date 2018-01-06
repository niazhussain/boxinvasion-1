var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){

	var name = req.user.name ;
	var currentUserId = req.user.id ;
	console.log(name);
	let arr =[];
	arr.push(currentUserId);

	//var count =0 , length = arr.length;
	User.find('users', {}, function (err, ListOfUsers) {

		/*
		for(let i = 0; i<ListOfUsers.length; ++i)
		{
			
			arr = ListOfUsers.slice();
			//console.log(arr[i]);

			arr = [...ListOfUsers];
			//console.log(arr);

			
			User.arr[i] = ListOfUsers[i];
			arr = Array.from( ListOfUsers );
			
			//arr = ListOfUsers.toString();
			//arr = ListOfUsers.slice() ;
			
		}
		*/
		if(err) throw err;
		req.session.ListOfUsers = ListOfUsers;
		
		
	});





	res.render('index', {title: req.user.name,userName: req.user.name ,condition:false,myusers: req.session.ListOfUsers });

	var token = jwt.sign(req.user.id, 'secret');



	
	var sess = req.session;
	// var packet = socket.handshake.session;
	console.log('\nSession ID : '+sess.id);
	console.log('\nUser ID : '+req.user.id);
	// console.log(packet);

});

router.post('/', function (req,res) {
	res.redirect('/');

});


function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}


module.exports = router;
