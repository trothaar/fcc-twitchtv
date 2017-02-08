//Run my jquery
$(document).ready(function() {
  //FCC stream info and status API call
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/freecodecamp",
    headers:{
      'Client-ID': '4hbpaesmju932l4hqytsewsyw1s2kg'
    },
    success: function(data1){
      console.log(data1);
       if (data1.stream === null) {
      //FCC Offline
      $("#fccStatus").html("Free Code Camp is currently OFFLINE");
    } else {
      //FCC Online
      $("#fccStatus").html("Free Code Camp is currently LIVE");
    }
    }
  });


});
