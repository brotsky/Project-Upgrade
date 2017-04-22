function hideNav() {
  $('#nav').fadeOut();
}

function openSpotify() {
  $('#spotify-content').slideDown();
  hideNav();
}

function openYoutube() {
  $('#youtube-content').slideDown();
  hideNav();
}

function openTwitter() {
  $('#twitter-content').slideDown();
  hideNav();
}

function showNav() {
  $('#nav').fadeIn();
}

function closeSpotify() {
  $('#spotify-content').slideUp();
  showNav();
}

function closeYoutube() {
  $('#youtube-content').slideUp();
  showNav();
}

function closeTwitter() {
  $('#twitter-content').slideUp();
  showNav();
}

function getWeather() {
  $.simpleWeather({
    location: 'Los Angeles, CA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h1 class="display-3"><img src="./img/weather-icons/'+weather.code+'.png"> '+weather.temp+'&deg;'+'</h1>';
      html += '<p>L '+weather.low+'&deg;</p>';
      html += '<p>H '+weather.high+'&deg;</p>';
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}

function getDateTime() {
  var date = moment().format('ddd MMM D');
  var time = moment().format('h:mm A');

  $('#date').html(date);
  $('#time').html(time);
}

function loadTweets() {
  $.ajax({
    url: '../php/twitter.php',
    type: 'GET',
    success: function(response) {
      if (typeof response.errors === 'undefined' || response.errors.length < 1) {
        var $tweets = $('<ul class="list-unstyled tweets px-5"></ul>');
        $.each(response, function(i, obj) {
          var $tweet = '<img src="' + obj.user.profile_image_url + '">';
          $tweet += '<strong>' + obj.user.name + '</strong>';
          $tweet += '@' + obj.user.screen_name;
          $tweet += '<small class="text-muted">' + moment(obj.created_at).fromNow() + '</small>'
          $tweet += '<span class="text">' + obj.text + '</span>';
          $tweets.append('<li class="tweet">' + $tweet + '</li>');
        });
        $('#twitter-content .content').html($tweets);
      } else {
        $('#twitter-content .content').text('Response error');
      }
    },
    error: function(errors) {
      $('#twitter-content .content').text('Request error');
    }
  });
}

$('#spotify').click(openSpotify);
$('#youtube').click(openYoutube);
$('#twitter').click(openTwitter);

$('#close-spotify').click(closeSpotify);
$('#close-youtube').click(closeYoutube);
$('#close-twitter').click(closeTwitter);

$(document).ready(function() {
  getDateTime();
  getWeather();
  loadTweets();

  setInterval(getDateTime, 1000);
  setInterval(getWeather, 1000);
  setInterval(loadTweets, 60000);
});
