<?

    /***********************************************************************
     * helpers.php
     *
     * Helper functions (apologize, dump, and 
     * redirect borrowed from CS50 PSET 7).
     **********************************************************************/

    /*
     * void
     * setup($page)
     *
     * Prints out the basic html for each page that is not the homepage
     */

    function setup($page)
    {

    // header info
    echo('<!DOCTYPE html>
  <html>
    <head>
    <script src="includes/helpers.js" type="text/javascript"></script>
      <link href="css/style.css" rel="stylesheet" type="text/css">
      <title>Obscure Sports Network: '.$page.'</title>
    </head>');

    // body to start cycle
    if($page == "Home")
      echo('<body class="body" onload="cycle(1);">');
    else
      echo('<body class="body">');

    // logo html
    echo('<div class="logo">
        <a href="index.php"><img id="logo" src="images/osn.png"></a>
      </div>
      <div class="links_off">
      <div class="links">');

    // print active links
    if($page == "Sports")
      echo('<div class="sports_link_box"><a class="active_link" href="sports.php" onmouseover="sport_on();">SPORTS</a></div>');

    else
      echo('<div class="sports_link_box"><a class="link" href="sports.php" onmouseover="sport_on();">SPORTS</a></div>');

    if($page == "Watch")
      echo('<div class="watch_link_box"><a class="active_link" href="watch.php">WATCH</a></div>');

    else
      echo('<div class="watch_link_box"><a class="link" href="watch.php">WATCH</a></div>');

    if($page == "Headlines")
      echo('<div class="headlines_link_box"><a class="active_link" href="#">HEADLINES</a></div>');

    else
      echo('<div class="headlines_link_box"><a class="link" href="#">HEADLINES</a></div>');
      
    echo('</div>');

    // search bar, sports, and scoreboard
    echo('<div class="search">
        <input class="search_bar" type="text" value="Search" onfocus="if(this.value == \'Search\'){this.value = \'\';}" onblur="if(this.value == \'\'){this.value = \'Search\';}">
        <div class="search_button">
          <img id="search_button" src="images/search.png">
        </div>
      </div>');

    // leave base div
      echo('<div class="sports" id="sports">
      </div>
      </div>');

    echo('<div class="scoreboard" id="scoreboard">');
      
      if($page != "Quidditch")
        echo('<div class="all_sports" id="all_sports" data-num="1">
          <div id="Dodgeball" class="scoreboard_sport" onmouseover="sport_over(this);" onmouseout="sport_out(this);" onclick="expand_sports(this);">
            Dodgeball');
      else
        echo('<div class="all_sports" id="all_sports" data-num="1">
          <div id="Quidditch" class="scoreboard_sport" onmouseover="sport_over(this);" onmouseout="sport_out(this);" onclick="expand_sports(this);">
            Quidditch');

      echo('</div>
        </div>

        <div class="larrow" onmouseover="larrow_over(this);" onmouseout="larrow_out(this);" onclick="larrow();"></div>

        <div id="games">
          <div class="game1"><div class="status">2:54 G 3</div><div class="team1">SBD</div><div class="team1score">8</div><div class="team2">LAC</div><div class="team2score">4</div></div><div class="game2"><div class="status">FINAL</div><div class="team1"><b>AJ\'S</b></div><div class="team1score">24</div><div class="team2" style="font-size:18.3px">GGPC</div><div class="team2score">23</div></div><div class="game3"><div class="status">1:16 G 2</div><div class="team1">CVD</div><div class="team1score">4</div><div class="team2">GSC</div><div class="team2score">2</div></div><div class="game4"><div class="status">4:02 G 5</div><div class="team1">NYE</div><div class="team1score">17</div><div class="team2">TXS</div><div class="team2score">14</div></div><div class="game5"><div class="status">FINAL</div><div class="team1">BUT</div><div class="team1score">21</div><div class="team2"><b>AZR</b></div><div class="team2score">24</div></div><div class="game6"><div class="status">FINAL</div><div class="team1"><b>DDM</b></div><div class="team1score">28</div><div class="team2">VRP</div><div class="team2score">27</div></div><div class="game7"><div class="status">4:53 G 3</div><div class="team1">MIB</div><div class="team1score">10</div><div class="team2">MNB</div><div class="team2score">7</div></div><div class="game8"><div class="status">3:20 G 1</div><div class="team1">PHJ</div><div class="team1score">0</div><div class="team2">PTP</div><div class="team2score">0</div></div><div class="game9"><div class="status">FINAL</div><div class="team1"><b>HBH</b></div><div class="team1score">29</div><div class="team2">LVV</div><div class="team2score">25</div></div><div class="game10"><div class="status">5:00 G 2</div><div class="team1">MSE</div><div class="team1score">5</div><div class="team2">HTG</div><div class="team2score">5</div></div>
        </div>

        <div class="rarrow" onmouseover="rarrow_over(this);" onmouseout="rarrow_out(this);" onclick="rarrow()"></div>
      </div>');
    }

    /*
     * void
     * recent($x)
     *
     * Prints out the html to display recent headlines
     */
    function recent($x)
    {
      if($x==1)
        echo('<div class="recent">');
      else
        echo('<div class="recent2">');

      echo('<h3>RECENT STORIES</h3>
        <div class="recent_story">
          <a href="#"><img class="recent_img" src="images/cotton_and_pepper.jpg"></a>
          <a href="#"><h4>Cotton McKnight and Pepper Brooks Weigh In On This Year\'s American Dodgeball League Crop</h4></a>
        </div>
        <div class="recent_story">
          <a href="#"><h4>Bo-Taoshi Star Yuzuko Hakase Moves To Rotterdam: Tries Hand At Canal Jumping</h4></a>
        </div>
        <div class="recent_story">
          <a href="#"><h4>Snitch Missing, As 13 Hour Match Rages On<img src="images/live.gif" class="live"></h4></h4></a>
        </div>
        <div class="recent_story">
          <a href="#"><h4>2 Moves Away From Checkmate, 3rd Round Knockout Saves Chet Ramsey From Defeat</h4></a>
        </div>
        <div class="recent_story">
          <a href="#"><h4>Controversy As Garden State Rollergirls\' Betsey Jones Checks Referee Early In Bout</h4></a>
        </div>
        <div class="recent_story">
          <a href="#"><h4>Ali Alberts Press Conference Response To Wardrobe Malfunction In Tuesday\'s Lingerie Football Game</h4></a>
        </div>
      </div>');
    }

    /*
     * void
     * video_headlines($x)
     *
     * Prints out the html to display video headlines
     */
    function video_headlines($x)
    {
      if($x==1)
      echo('<div class="video_headlines">
        <h3>RECENT VIDEOS</h3>
        <div class="video">
          <a href="#"><img class="video_img" src="videos/disc_golf.jpg">
          <h5>American National Collegiate Disc Golf Championships<img src="images/vid.jpg" class="play"></h5></a>
        </div>
        <div class="video">
          <a href="#"><img class="video_img" src="videos/camp.jpg">
          <h5>Training Camp Began For Australian Lingerie Football League Last Thursday<img src="images/vid.jpg" class="play"></h5></a>
        </div>
        <div class="video">
          <a href="#"><img class="video_img" src="videos/snitch.jpg" alt="snitch">
          <h5>Yale Quidditch: "New Freshman Snitches Too Aggressive"<img src="images/vid.jpg" class="play"></h5></a>
        </div>
      </div>');

      else
        echo('<div class="video_headlines2">
        <h3>RECENT VIDEOS</h3>
        <div class="video2">
          <a href="#"><img class="video_img2" src="videos/disc_golf.jpg">
          <h5>American National Collegiate Disc Golf Championships<img src="images/vid.jpg" class="play"></h5></a>
        </div>
        <div class="video2">
          <a href="#"><img class="video_img2" src="videos/camp.jpg">
          <h5>Training Camp Began For Australian Lingerie Football League Last Thursday<img src="images/vid.jpg" class="play"></h5></a>
        </div>
        <div class="video2">
          <a href="#"><img class="video_img2" src="videos/snitch.jpg" alt="snitch">
          <h5>Yale Quidditch: "New Freshman Snitches Too Aggressive"<img src="images/vid.jpg" class="play"></h5></a>
        </div>
      </div>');
    }

    /*
     * void
     * footer()
     *
     * Prints out the html to display footer links
     */

    function footer()
    {
    echo('</body>
  <footer>
    <div class="follow">
      <div class="follow_text">Follow OSN</div>
      <a href="#"><img src="images/facebook.jpg"class="facebook"><a>
      <a href="#"><img src="images/twitter.jpg" class="twitter"></a>
      <div class="contact">Contact Us:</div>
      <div class="admin"><a href="mailto:#">admin@osn.com<a></div>
    </div>

    <div class="scores">
      <div class="score_top"><a href="#"><h6>Scores</h6></a></div>
      <div class="score_link"><a href="#">Dodgeball</a></div>
      <div class="score_link"><a href="#">Frisbee</a></div>
      <div class="score_link"><a href="#">Quidditch</a></div>
      <div class="score_link"><a href="#">Bo-Taoshi</a></div>
      <div class="score_link"><a href="#">Roller Derby</a></div>
      <div class="score_link"><a href="#">Chess Boxing</a></div>
      <div class="score_link"><a href="#">Curling</h6></div>
      <div class="score_link"><a href="#">Lingerie Football</a></div>
    </div>

    <div class="footer_links">
      <div class="footer_link"><a href="index.php">Home</a></div>
      <div class="footer_link"><a href="sports.php">Sports</a></div>
      <div class="footer_link"><a href="watch.php">Watch</a></div>
      <div class="footer_link"><a href="#">Headlines</a></div>
    </div>
  </footer>
</html>');
    }

    /*
     * void
     * apologize($message)
     *
     * Apologizes to user by displaying a page with message.
     */

    function apologize($message)
    {
        // require template
        require_once("apology.php");

        // exit immediately since we're apologizing
        exit;
    }

    /*
     * void
     * dump($variable)
     *
     * Facilitates debugging by dumping contents of variable
     * to browser.
     */

    function dump($variable)
    {
        // dump variable with some quick and dirty HTML
        require("dump.php");

        // exit immediately so that we can see what we printed
        exit;
    }

    /*
     * void
     * logout()
     *
     * Logs out current user, if any. Based on Example #1 at
     * http://us.php.net/manual/en/ function.session-destroy.php
     */
     
     function logout()
     {
        //unset any session variables
        $_SESSION = array();
        
        // expire cookie
        if (isset($_COOKIE[session_name()]))
        {
            if (preg_match("{^(/~[^/]+/database/)}", $_SERVER["REQUEST_URI"], $matches))
                setcookie(session_name(), "", time() - 42000, $matches[1]);
            else
                setcookie(session_name(), "", time() - 42000);
        }
        
        // destroy session
        session_destroy();
    }

    /*
     * void
     * redirect($destination)
     * 
     * Redirects user to destination, which can be
     * a URL or a relative path on the local host.
     *
     * Because this function outputs an HTTP header, it
     * must be called before caller outputs any HTML.
     */

    function redirect($destination)
    {
        // handle URL
        if (preg_match("/^http:\/\//", $destination))
            header("Location: " . $destination);

        // handle absolute path
        else if (preg_match("/^\//", $destination))
        {
            $protocol = (@$_SERVER["HTTPS"]) ? "https" : "http";
            $host = $_SERVER["HTTP_HOST"];
            header("Location: $protocol://$host$destination");
        }

        // handle relative path
        else
        {
            // adapted from http://www.php.net/header
            $protocol = (@$_SERVER["HTTPS"]) ? "https" : "http";
            $host = $_SERVER["HTTP_HOST"];
            $path = rtrim(dirname($_SERVER["PHP_SELF"]), "/\\");
            header("Location: $protocol://$host$path/$destination");
        }

        // exit immediately since we're redirecting anyway
        exit;
    }
?>
