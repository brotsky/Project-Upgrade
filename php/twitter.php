<?php
    
    header('Content-Type: application/json');
    
    define("CONSUMER_KEY", "lLgPqhhR0oPt9P0RZ930WhZls");
    define("CONSUMER_SECRET", "GLWm16egtAZuAkkLOMEOHF8Ts9t0CIneuq7VChhVUOglljOQWL");
    
    require "vendor/autoload.php";

    use Abraham\TwitterOAuth\TwitterOAuth;
    
    $access_token = "131660012-9UjoxeNeatgcc5Wtg9nXtdhTTzaQnNeaLjjfbn7t";
    $access_token_secret = "tcjDA0Tb8iZi5zE6iBdZaGZm7gUlYklbSBsTFgtJ9Ow7L";
        
    $connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, $access_token, $access_token_secret);
    
    
    $statuses = $connection->get("statuses/home_timeline", ["count" => 25, "exclude_replies" => true]);
    
    echo json_encode($statuses);
    
    die();