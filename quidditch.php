<?

    // require common code
    require_once("includes/common.php");

    setup("Quidditch");

?>

<div class="main_story">
	<div class='story_text'>
      <a href='#'><img class='story_img' src='images/tet.jpg'></a>
      <a href='#' class='story_headline'><h1>Seeker Tet Johnson Snags Victory For UCLA</h1></a>
      <div><h2>LOS ANGELES - Freshman Seeker Tet Johnson has been tripping up snitches ever since his first start last month with UCLA Quidditch, yesterday setting his own personal time reccord for a game ending grab in just 4 minutes. "I just try to be quicker than ...</h2></div>
    </div>
</div>

<?
  // post recent stories
  recent(1);
?>

<div class="quidditch">
	<div class="iqarank">
		<h8><a href="#" style="color: #555555">#IQARANK</a></h8>
		<a href="#"><img class="iqarank_img" src="images/iqa.jpg"></a><h2>We went to the experts to find out who was the best in the IQA.</h2>
		<div class="iqarank_link"><a href="#">SEEKERS</a></div>
		<div class="iqarank_link"><a href="#">CHASERS</a></div>
		<div class="iqarank_link"><a href="#">KEEPERS</a></div>
		<div class="iqarank_link"><a href="#">BEATERS</a></div>
	</div>
	<div class="insider">
		<h8><a href="#" style="color: #555555; text-align: center;">IQA INSIDER</a></h8>
		<br>
		<a href="#"><div class="contributor">Ray Thompson</div>
		<div class="bullet"></div><div class="insider_link">Beaters Taking A Beating</div></a>
		<a href="#"><div class="contributor">Jeff Marks</div>
		<div class="bullet"></div><div class="insider_link">Keepers: Offense or Defense</div></a>
		<a href="#"><div class="contributor">Ross Powers</div>
		<div class="bullet"></div><div class="insider_link">Harv. Horntails' Power Offense</div></a>
	</div>
	<div class="top_posts">
		<h8><a href="#" style="color: #555555">TOP POSTS</a></h8>
			<a href="#"><div class="post">
				<div class="post_title">Angry Moms</div>
				<div class="post_text"><h2>Concussion Concious Mothers Call For New Regulation Bludgers</h2></div>
				<img src="images/bludger_mom.jpg" class="post_pic"> 
			</div></a>
			<a href="#"><div class="post">
				<div class="post_title">Firebolt</div>
				<div class="post_text"><h2>MIT Students Create "Hovercraft" Broom Stick</h2></div>
				<img src="images/firebolt.jpg" class="post_pic"> 
			</div></a>
	</div>
</div>


<? 
// end html
footer(); 

?>