var express = require('express');
var router = express.Router();


//var CreateUI = require('../models/UI');
// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	//var name =   ;

     res.render('index', {title: req.user.name,userName: req.user.name ,condition:false });
	//CreateUI.CreateMatrics();
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
