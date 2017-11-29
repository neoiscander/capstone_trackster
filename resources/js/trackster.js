var Trackster = {};
// Constanta
const API_KEY = "025b45aef007c2bf5e5db3ba1ad813e1";

$(document).ready(function() {
  // Remove header animation
  $(".header-title").addClass("toggle-this-class").removeClass("toggle-this-class");

  // Click function - get list
  $("#search-button").click(function () {
    Trackster.searchTracksByTitle($(".input").val());
  });

  // When press enter
  $("input").keydown(function(event) {
    if (event.which == 13) {
      //console.log("ok");
      Trackster.searchTracksByTitle($(".input").val());
    }
  });

  // Toggle class when hover over search button, only for training exapmle
  $("#search-button").hover(function () {
    $(this).toggleClass("button-hover");
  });
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  $("#request-list").empty();

  for(var i = 0; i < tracks.length; i++) {


    //var track = tracks[i];
    var mediumAlbumArt = tracks[i].image[1]["#text"];
    var listenersConvenientNumber = numeral(tracks[i].listeners).format("0.0 a");

    var requestList =
      '<div class="row flex-features">' +
        '<h4 class="col-md-2 col-xs-2" data-info="play-icon">' + '<a href="' + tracks[i].url + '" target="_blank"><i  class="fa fa-play-circle-o fa-lg"></i></a></h4>' +
        '<h4 class="col-md-2 col-xs-2" data-info="track-name">' + tracks[i].name + '</h4>' +
        '<h4 class="col-md-2 col-xs-2" data-info="artist">' + tracks[i].artist + '</h4>' +
        '<h4 class="col-md-3 col-xs-3" data-info="album"><img src="' + mediumAlbumArt + '"></h4>' +
        '<h4 class="col-md-2 col-xs-2" data-info="popularity">' + listenersConvenientNumber + '</h4>' +
      '</div>';

    $("#request-list").append(requestList);
  }
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  // Request to LastFM
  $.ajax({
    url: " http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + title + "&api_key=" + API_KEY + "&format=json",
    datatype: "json",
    success: function(data) {
      Trackster.renderTracks(data.results.trackmatches.track);
      //console.log(data.results.trackmatches.track);
    },
    beforeSend: function () {
      $(".header-title").addClass("toggle-this-class");
      $("input").addClass("search-process");
    },
    complete: function () {
      $(".header-title").removeClass("toggle-this-class");
      $("input").removeClass("search-process");
    },
  });
};
