var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var Active = require('../models/active');
var User = require('../models/user');

//Takes the socketid and token to find user id. Adds to active users if not already ther and updates socket id if already active
module.exports.handleConnection = function (token, socketid, callback) {

    var id = jwt.decode(token);
    var newActive;
    User.getUserById(id,function (err , user) {
        newActive = new Active({
            userid : id,
            socketid :socketid,
            isPlaying :false,
            username : user.username
        });
        console.log("name is " + newActive.username);
    });

    Active.getUserByID(id, function (err, active) {
        if(err) throw err;
        //If user is NOT already active
        if(!active){
            Active.addActive(newActive, function(err, user){
                if(err) throw err;
                //console.log(user);
            });
            console.log('active user added');
        }
        // If user is active but socket has refreshed
        else {
            Active.updateActive(newActive, function(err, user){
                if(err) throw err;
                //console.log(user);
            });
            console.log('user updated');
        }
    });
}

module.exports.handleDisconnect = function (token, socketid, callback) {

    var id = jwt.decode(token);

    Active.deleteByID(id, function (err, active) {
        if(err) throw err;
        console.log('deleteby ID was ran');
    });
};

module.exports.broadcastActiveUsers = function () {
	var ListUsers=[];
    User.find('actives', {}, function (err, ListOfUsers) {
for (var i=0;i<ListOfUsers.length;i++)
        console.log(ListOfUsers[i].username+" online user")
        if(err) throw err;
	});
    for (v of ListUsers)
		console.log(v.userid);
};

module.exports.handleInvites = function () {

}