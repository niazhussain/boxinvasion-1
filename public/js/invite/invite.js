/*
@Shafiq Aslam
* showing live user in invite div
 */
/*var message = document.getElementById('message');
btn = document.getElementById('send');
messageArea = document.getElementById('messageArea');
feedback = document.getElementById('typingMessage');*/
var thisUser;
//show live user
socket.on('newuser', function(data){
    var ele=document.getElementById("onlineuser");
     // $('#onlineuser').empty();
    while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
    }
    for(i in data.activeUlist) {
        console.log("User id " + data.activeUlist[i]._id);
        console.log(JSON.stringify(data.activeUlist, undefined, 4));
        if (data.activeUlist[i].username !== thisUser) {
            var element = document.getElementById('onlineuser');
            //  if(( $( "#onlineuser" ).length ))
            // element.innerHTML+='<div></div><span class="input-group-addon small" style="width: inherit" id="basic-addon1">'+data.activeUlist[i].username+'</span><span class="input-group-btn "><button socketid="'+data.activeUlist[i].socketid+'"class="btn btn-primary"  id="'+data.activeUlist[i].userid+'">Send</button></span></div>';

            let frag = document.createDocumentFragment();
            let row = frag.appendChild(document.createElement('tr'));
            row.className = "info";
            let col1 = row.appendChild(document.createElement('td'));
            let col2 = row.appendChild(document.createElement('td'));
            col1.innerHTML = data.activeUlist[i].username;
            col2.innerHTML = '<p align="right"> <button  onclick="sendInvite(this)" socketid="' + data.activeUlist[i].socketid + '" id="' + data.activeUlist[i].userid + '"  class=" btn btn-info btn-sm" type="button"> Challenge </button> </p>';
            element.appendChild(frag);

            console.log("new user on");
        }
        else {
            console.log("new user other side");
        }
        //  document.getElementById("onlineuser").contentWindow.location.reload(true);
    }
    document.getElementById("onlineuser").innerHTML = document.getElementById("onlineuser").innerHTML ;

});

function  sendInvite(curr) {
      socket.emit('invitegame', {
        id: curr.id
    });
}
//show live user
socket.on('userLogout', function(data){
    console.log(" called on disconnect");
    alert("Hi ");
    var ele=document.getElementById("onlineuser");
    while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
    }
    // ele.innerHTML="";
    //  $('#onlineuser').empty();
    for(i in data.activeUlist) {
        console.log("User id " + data.activeUlist[i]._id);
        console.log(JSON.stringify(data.activeUlist, undefined, 4));
        if (data.activeUlist[i].username !== thisUser) {
            var element = document.getElementById('onlineuser')
            // element.innerHTML+='<div></div><span class="input-group-addon small" style="width: inherit" id="basic-addon1">'+data.activeUlist[i].username+'</span><span class="input-group-btn "><button socketid="'+data.activeUlist[i].socketid+'"class="btn btn-primary"  id="'+data.activeUlist[i].userid+'">Send</button></span></div>';
            let frag = document.createDocumentFragment();

           // let div = frag.appendChild(document.createElement('tr'));
            let row = frag.appendChild(document.createElement('tr'));
            row.className = "info";
            let col1 = row.appendChild(document.createElement('td'));
            let col2 = row.appendChild(document.createElement('td'));
            col1.innerHTML = data.activeUlist[i].username;
            col2.innerHTML = '<p align="right"> <button socketid="' + data.activeUlist[i].socketid + '" id="' + data.activeUlist[i].userid + '"  class=" btn btn-info btn-sm" type="button"> Challenge </button> </p>';
            element.appendChild(frag);
            console.log("new user on");
        }
        else {
            console.log("new user other side");
        }
        //document.getElementById("onlineuser").contentWindow.location.reload(true);
    }
    document.getElementById("onlineuser").innerHTML = document.getElementById("onlineuser").innerHTML ;

});

$( document ).ready(function() {
    thisUser=$("#user").val();

    ///invite
    $( "#inviteuser" ).click(function() {
        var inviteusername=$("#inviteusername").val().replace(/\s/g, '');
        console.log("Client JS: "+inviteusername)
        socket.emit('invitegame', {
            myToken: $("#token").val(),
            otherToken:$("#inviteuser").val()
        });
        /*socket.on('playgame', function(){
         $("#box-invasion-chat-div").fadeIn();
         });*/
    });
      ////////////////////////////////////////////////
});




