$(document).ready(function () {
  // Click function
  $("#search-button").click(function () {
    Trackster.searchTracksByTitle($(".input").val());
  });

  // Clnstanta
  const API_KEY = "025b45aef007c2bf5e5db3ba1ad813e1";

  // Toggle class when hover over search button
  $("#search-button").hover(function () {
    $(this).toggleClass("button-hover");
  });

  var Trackster = {};

  /*
    Given an array of track data, create the HTML for a Bootstrap row for each.
    Append each "row" to the container in the body to display all tracks.
  */
  Trackster.renderTracks = function(tracks) {

  };

  /*
    Given a search term as a string, query the LastFM API.
    Render the tracks given in the API query response.
  */
  Trackster.searchTracksByTitle = function(title) {
    // Request to LastFM
    $.ajax({
      url: " http://ws.audioscrobbler.com/2.0/?method=track.search&track="+title+"&api_key="+API_KEY+"&format=json",
      datatype: "json",
      success: function(data) {
        console.log(data);
      },
    });
  };

});
