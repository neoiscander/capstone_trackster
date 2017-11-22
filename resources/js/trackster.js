$(document).ready(function () {
  // Click function
  $("#search-button").click(function () {
    $(".input").val();
});

  // Toggle class when hover over search button
  $("#search-button").hover(function () {
    $(this).toggleClass("button-hover");
  });


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

};
