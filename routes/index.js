var express = require('express');
var router = express.Router();


// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index', {title: req.user.name,userName: req.user.name ,condition:false });
	
	var sess = req.session;
	console.log(sess.passport.user);

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
