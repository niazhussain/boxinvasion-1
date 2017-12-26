
// var socket = io.connect('http://localhost:3000');
var socket = io();
/*console.log("testct:"+ chatroom);
console.log("Sokcet id of "+$(document.getElementById('user')).val()+":"+ socketId);*/
var message = document.getElementById('message');
//user = "{{userName}}";/*document.getElementById('user');*/
btn = document.getElementById('send');
messageArea = document.getElementById('messageArea');
feedback = document.getElementById('typingMessage');
var colorset=["muted","primary","success","info","warning","danger"];
var colorposition=0;
socket.on('chat', function(data){
    feedback.innerHTML = '';
       var altUser=data.user.substring(0, 2).toUpperCase();
   // var classType="pull-left";
    if(data.user===$("#user").val())
    {
        messageByMe(altUser,data);
    }
    else
    {
        messageByYou(altUser,data);
    }
    colorposition++;
    if(colorposition>5){
        colorposition=0;
    }
});
socket.on('typing', function(data){
    typingMessage.innerHTML = '<p><em><strong>' + data + '</strong> is typing a message...</em></p>';
});
socket.on('not typing', function(){
    console.log("not typing");
    document.getElementById("typingMessage").innerHTML="";
});
$( document ).ready(function() {
    //setInterval(function(){updateTimeAgo()}, 5000);

    user=$("#user").val();
    $( "#send" ).click(function() {
        var nullMessage=message.value.replace(/\s/g, '');
        if(nullMessage!== "")
            socket.emit('chat', {
                message: message.value,
                user: user
            });
        message.value = "";
    });
    $( "#message" ).keypress(function() {
        if (event.key === "Enter") {
            var nullMessage=message.value.replace(/\s/g, '');
            if(nullMessage!== "")
                socket.emit('chat', {
                    message: message.value,
                    user: user
                });
            message.value = "";
        }
        socket.emit('typing', user);
    });
    $( "#message" ).focusout(function() {
         socket.emit('not typing');
    });
});
/**
 * @Niaz Hussain
 * method getTimeAgo
 * @param date i.e value from dom element from chat window
 * @return timeAgo i.e : 5 minutes ago
 */
function getTimeAgo(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    if(Math.round(seconds/(60*60*24*365.25)) >= 2) return Math.round(seconds/(60*60*24*365.25)) + " years ago";
    else if(Math.round(seconds/(60*60*24*365.25)) >= 1) return "1 year ago";
    else if(Math.round(seconds/(60*60*24*30.4)) >= 2) return Math.round(seconds/(60*60*24*30.4)) + " months ago";
    else if(Math.round(seconds/(60*60*24*30.4)) >= 1) return "1 month ago";
    else if(Math.round(seconds/(60*60*24*7)) >= 2) return Math.round(seconds/(60*60*24*7)) + " weeks ago";
    else if(Math.round(seconds/(60*60*24*7)) >= 1) return "1 week ago";
    else if(Math.round(seconds/(60*60*24)) >= 2) return Math.round(seconds/(60*60*24)) + " days ago";
    else if(Math.round(seconds/(60*60*24)) >= 1) return "1 day ago";
    else if(Math.round(seconds/(60*60)) >= 2) return Math.round(seconds/(60*60)) + " hours ago";
    else if(Math.round(seconds/(60*60)) >= 1) return "1 hour ago";
    else if(Math.round(seconds/60) >= 2) return Math.round(seconds/60) + " minutes ago";
    else if(Math.round(seconds/60) >= 1) return "1 minute ago";
    else if(seconds >= 2)return seconds + " seconds ago";
    else return seconds + "second ago";
}
/*
@method: updateTimeAgo
@description:
@Niaz Hussain
 */
 function updateTimeAgo() {
    if ( $( ".time-ago" ).length ) {
        $('.time-ago').each(function (index, value) {
            $(this).empty();
            $(this).html('<span class="glyphicon glyphicon-time"></span> '+getTimeAgo($( this ).attr('title')));
        });
    }
 }
/*
  method:messageByMe
  Description: this function is used to print messages from me/Current user
  @param:altUser
  @param: data i.e from server contains messages from user
  @Niaz Hussain
   */
function messageByMe(altUser,data)
{
    messageArea.innerHTML +='<div class="panel-body right clearfix"> <span class="chat-img pull-right"> <img src="http://placehold.it/50/55C1E7/fff&text='+altUser+'" alt="User Avatar" class="img-circle" title="'+data.user+'" /> </span> <div class="chat-body clearfix"> <small class=" text-muted time-ago" title="'+Date.now()+'"><!--<span class="glyphicon glyphicon-time"></span> just now</small>--><p>'+data.message+' </p>  </div></div>';
}
/*
  method:messageByYou
  Description: this function is used to print messages from others on my side
  @param:altUser
  @param: data i.e from server contains messages from user
  @Niaz Hussain
   */
function messageByYou(altUser,data)
{
    messageArea.innerHTML +='<div class="panel-body clearfix">  <span class="chat-img "> <img src="http://placehold.it/50/FA6F57/fff&text='+altUser+'" alt="User Avatar" class="img-circle pull-left"  title="'+data.user+'"/> </span> <div class="chat-body right clearfix ">  <!--<small class="text-muted time-ago pull-right" title="'+Date.now()+'"> <span class=" glyphicon glyphicon-time "></span>just now</small>--><p> '+"    "+data.message+'</p> </div></div>';
    //messageArea.innerHTML +='<div class="panel-body left clearfix"> <span class="chat-img pull-left"> <img src="http://placehold.it/50/FA6F57/fff&text='+altUser+'" alt="User Avatar" class="img-circle"  title="'+data.user+'"/> </span> <div class="chat-body right clearfix ">  <small class=" text-muted time-ago pull-right" title="'+Date.now()+'"> <span class="glyphicon glyphicon-time"></span>just now</small><p class="pull-right"> '+data.message+'</p></div> </div>';
}

