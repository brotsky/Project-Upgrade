function hideNav() {
  $('#nav').fadeOut();
}

function openInstagram() {
  $('#instagram-content').slideDown();
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

function closeInstagram() {
  $('#instagram-content').slideUp();
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

$('#instagram').click(openInstagram);
$('#youtube').click(openYoutube);
$('#twitter').click(openTwitter);

$('#close-instagram').click(closeInstagram);
$('#close-youtube').click(closeYoutube);
$('#close-twitter').click(closeTwitter);

$(document).ready(function() {
  getDateTime();
  getWeather();

  setInterval(getDateTime, 1000);
  setInterval(getWeather, 1000);
});
