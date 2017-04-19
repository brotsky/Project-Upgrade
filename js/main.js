function getDateTime() {
  var date = moment().format('ddd MMM D');
  var time = moment().format('h:mm A');

  $('#date').html(date);
  $('#time').html(time);
}

getDateTime();

setInterval(getDateTime, 1000);


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

$('#instagram').click(openInstagram);
$('#youtube').click(openYoutube);
$('#twitter').click(openTwitter);

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


$('#close-instagram').click(closeInstagram);
$('#close-youtube').click(closeYoutube);
$('#close-twitter').click(closeTwitter);
