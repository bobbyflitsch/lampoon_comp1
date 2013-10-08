<?

    // require common code
    require_once("includes/common.php");

    // print out first html
    setup("Sports");
?>

<div class="sports_body">
  <div class="lsport">
  	<div class="sport_title"><a href="#"><h6>DODGEBALL</h6></a></div>
  	<a href="#"><img src="sports/dodgeball.jpg" class="sport_img"></a>
  	<div class="sport_text">Final minute substitution helps New York Epic in amazing rally to win against the Chaos. <a href="#"><b>COVERAGE</b></a></div>
  	<div class="sport_headline"><a href="#">Johnson's Cobras Come Out On Top</a></div>
  	<div class="sport_headline"><a href="#">Knockouts League Leader Eric Mark Can't Dodge Tax Evasion Charges</a></div>
  </div>
  <div class="rsport">
  	<div class="sport_title"><a href="#"><h6>FRISBEE</h6></a></div>
  	<a href="#"><img src="sports/frisbee.jpg" class="sport_img"></a>
  	<div class="sport_text">FC Lightning's Captain Mary Stephens Out With Ankle Injury <a href="#"><b>COVERAGE</b></a></div>
  	<div class="sport_headline"><a href="major-league-ultimate-on-the-r.php">Major League Ultimate On The Rise</a></div>
  	<div class="sport_headline"><a href="#">Gruesome Compound Fracture at LSU/Alabama Matchup (pictures)</a></div>
  </div>
  <div class="lsport">
  	<div class="sport_title"><a href="quidditch.php"><h6>QUIDDITCH</h6></a></div>
  	<a href="#"><img src="sports/quidditch.jpg" class="sport_img"></a>
  	<div class="sport_text">Concussion Concious Mothers Call For New Regulation Bludgers. <a href="#"><b>STORY</b></a></div>
  	<div class="sport_headline"><a href="#">MIT Students Create "Hovercraft" Broom Stick</a></div>
  	<div class="sport_headline"><a href="#">Florida State Fliers Chasing Rematch Against LSU</a></div>
  </div>
  <div class="rsport">
  	<div class="sport_title"><a href="#"><h6>BO-TAOSHI</h6></a></div>
  	<a href="#"><img src="sports/bo_taoshi.jpg" class="sport_img"></a>
  	<div class="sport_text">Toyota Now Requiring Employees To Join Company Bo-Taoshi Team. Cite Need For "Team Mentality" <a href="#"><b>STORY</b></a></div>
  	<div class="sport_headline"><a href="#">Hideki Leads Tokyo Team To Another Victory</a></div>
  </div>
  <div class="lsport">
  	<div class="sport_title"><a href="#"><h6>ROLLER DERBY</h6></a></div>
  	<a href="#"><img src="sports/roller.jpg" class="sport_img"></a>
  	<div class="sport_text">Commission Meeting Over Wisconsin Hair Pulling/ Brawl Incident. <a href="#"><b>UPDATE</b></a></div>
  	<div class="sport_headline"><a href="#">Stacy Quinn Wins 4th Straight Golden Skate Title</a></div>
  	<div class="sport_headline"><a href="#">Youth Roller Derby Camps Under Fire</a></div>
  </div>
  <div class="rsport">
  	<div class="sport_title"><a href="#"><h6>CHESS BOXING</h6></a></div>
  	<a href="#"><img src="sports/chess.jpg" class="sport_img"></a>
  	<div class="sport_text">Concussed Reigning Champion Richard Jackson Confuses Rook For Pawn. Servere Consequences. <a href="#"><b>STORY</b></a></div>
  	<div class="sport_headline"><a href="#">Youth Chess Boxing Camps On Fire</a></div>
  </div>
  <div class="lsport">
  	<div class="sport_title"><a href="#"><h6>CURLING</h6></a></div>
  	<a href="#"><img src="sports/curling.jpg" class="sport_img"></a>
  	<div class="sport_text">Danes Lose Olympic Curling Team To Ice Fracture. <a href="#"><b>REPORT</b></a></div>
  	<div class="sport_headline"><a href="#">Michelle Kwan To Join National Curling Team</a></div>
  	<div class="sport_headline"><a href="#">Ohio Janitor's Union To Form Team To Compete In Olympic Trials</a></div>
  </div>
  <div class="rsport">
  	<div class="sport_title"><a href="#"><h6>LINGERIE FOOTBALL</h6></a></div>
  	<a href="#"><img src="sports/football.jpg" class="sport_img"></a>
  	<div class="sport_text">Victoria's Secret Signs On To Sponsor 2014 Season. JC Penny CEO Hangs Head In Shame. <a href="#"><b>STORY</b></a></div>
  	<div class="sport_headline"><a href="#">Proponents of Padding Restrictions Rejoice Over Recent Ruling</a></div>
  </div>
</div>

<?
  // post recent stories
  recent(1);

// end html
footer(); 

?>