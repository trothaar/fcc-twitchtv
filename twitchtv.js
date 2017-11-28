//Run my jquery
$(document).ready(function() {
  //FCC stream info and status API call
  //Use client ID method as explained in Coding 360 video
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/freecodecamp",
    headers:{
      'Client-ID': '4hbpaesmju932l4hqytsewsyw1s2kg'
    },
    success: function(data1){
      //console.log(data1);
       if (data1.stream === null) {
      //FCC Offline
      $("#fccStatus").html("Free Code Camp is currently OFFLINE");
    } else {
      //FCC Online
      $("#fccStatus").html("Free Code Camp is currently LIVE");
    }
    }
  });

//Get followers without hard-coding an array, as explained in Coding 360 video
$.ajax({
  type: "GET",
  url: "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/",
  headers:{
    'Client-ID': '4hbpaesmju932l4hqytsewsyw1s2kg'
},
success: function(data2){
for (var i = 0; i < data2.follows.length; i++) {
  //Get displayName, logo, and status
  var displayName = data2.follows[i].channel.display_name;
  var logo = data2.follows[i].channel.logo;
  var status= data2.follows[i].channel.status;
  //If channel does not have logo, use a placeholder
  if(logo==null){
  logo="https://placehold.it/400x400?text=No+Logo";
}
// If status is null, user is offline
if(status==null){
  status = "User Offline";
}
// If displayName is undefined, user does not Exist
if(displayName==undefined){
  displayName = "Unknown";
  status = "User Does Not Exist";
  logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
}

		// Create Row DOM
		var followerInfoRow = document.createElement('div');
			followerInfoRow.classList.add('row');

		// Create Grid 4a DOM
		var followerInfoGrid4a = document.createElement('div');
			followerInfoGrid4a.classList.add('col-md-4');
			
		// Create Image for Link DOM
		var followerInfoImage = document.createElement('img');
		    followerInfoImage.src = logo;

        // Place Image Inside Anchor DOM
		followerInfoGrid4a.appendChild(followerInfoImage);

		// Create Anchor Link DOM
		var followerInfoAnchor = document.createElement('a');
            followerInfoAnchor.href = 'http://www.twitch.tv/' + displayName;

		// Create Grid 4b DOM
		var followerInfoGrid4b = document.createElement('div');
			followerInfoGrid4b.classList.add('col-md-4');

        // Place displayName inside Grid 4b DOM
		followerInfoGrid4b.appendChild(displayName);
			
		// Create Grid 4c DOM
		var followerInfoGrid4c = document.createElement('div');
			followerInfoGrid4c.classList.add('col-md-4');

        // Place status inside Grid 4c DOM
		followerInfoGrid4c.appendChild(status);
		
		// Place grid DOM's inside row DOM
		followerInfoRow.appendChild(followerInfoGrid4a);
		followerInfoRow.appendChild(followerInfoGrid4b);
		followerInfoRow.appendChild(followerInfoGrid4c);

        // Place followerInfoRow DOM into followerInfo
        $("#followerInfo").prepend(followerInfoRow);

/*
$("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
          "<a href='http://www.twitch.tv/"+ displayName+"'><img src='" + logo + "'></a>"
          +
          "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
*/

}
}
});
// Test followers that FCC gives us to ensure that code is working
var deletedFollowers=['brunofin', 'comster404'];
for(var i=0;i<deletedFollowers.length;i++){
  badUserNames();
}

function badUserNames(){
  var user = deletedFollowers[i];
  var link = "https://api.twitch.tv/kraken/streams/" + user;
  //console.log(link);
 $.ajax({
   type: "GET",
   url: link,
   headers:{
  'Client-ID': '4hbpaesmju932l4hqytsewsyw1s2kg'
},
 success: function(data3){
   console.log(data3);
   var logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
   var displayName= data3.statusText;
   var status= data3.status;
   if (displayName==undefined){
     displayName = user;
     status = "User Does Not Exist";
   }
   $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
             "<a href='http://www.twitch.tv/"+ displayName+"'><img src='" + logo + "'></a>"
             +
             "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
 }
});
}
//}


});
