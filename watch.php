<?

    // require common code
    require_once("includes/common.php");

    // print out first html
    setup("Watch");

    // Array of video urls
	/*var videos = new Array();
		videos[1] = "//www.youtube.com/embed/X7ZqrIENBJU";
		videos[2] = "//www.youtube.com/embed/Y2OfCkCJg2E";
		videos[3] = "//www.youtube.com/embed/2K-xgBpQU84";
		videos[4] = "//www.youtube.com/embed/cWgOOaXZbXs";
		videos[5] = "//www.youtube.com/embed/Vj-UHrSHC3E";*/

?>
<div class="video_body">

	<div class="vid_of_day">
		<div class="vid_title"><h7>Video of the Day<h7></div>
		<div class="day_video">
	  		<iframe class="day_video" src="//www.youtube.com/embed/kK5TQSKmS3o" frameborder="0" allowfullscreen></iframe>
		</div>

		<div class="day_vid_description">
	  		<h2>BERLIN - This Friday marked an exciting matchup for the World Chess Boxing Championships. Competitors Nikolay "The Chairman" Sazhin and Leo "Granit" Kraft duked it out in the ring and on the board, in an exciting feat of both brains and brawn, which drew an audiance of over 2000. <a href="#"><b>STORY</b></a></h2>
		</div>
	</div>

	<div class="lvideo">
		<a href="#"><img class="vid" src="videos/catches.jpg"></a>
		<div class="vid_text">
			<a href="#">Ultimate Dodgeball - Top 10 Catches</a>
		</div>
	</div>

	<div class="rvideo">
		<a href="#"><img class="vid" src="videos/bo_taoshi.jpg"></a>
		<div class="vid_text">
			<a href="#">Tokyo vs. Kyoto: Bo-Taoshi</a>
		</div>
	</div>

	<div class="lvideo">
		<a href="#"><img class="vid" src="videos/quidditch.jpg"></a>
		<div class="vid_text">
			<a href="#">Brooms Up! - Quidditch World Cup IV documentary</a>
		</div>
	</div>

	<div class="rvideo">
		<a href="#"><img class="vid" src="videos/ultimate.jpg"></a>
		<div class="vid_text">
			<a href="#">Top 10 Ultimate Frisbee Plays 2013</a>
		</div>
		<div class="vid_text">
		</div>
	</div>

	<div class="space2">
  		<a href="#"><img class="ad2" src="ads/pepsi.jpg" alt="advertisement"></a>
  		<a href="#"><img class="ad2" src="ads/rca.jpg" alt="advertisement"></a>
  		<a href="#"><img class="ad2" src="ads/fedex.jpg" alt="advertisement"></a>
	</div>

	<div class="lvideo">
		<a href="#"><img class="vid" src="videos/curl.jpg"></a>
		<div class="vid_text">
			<a href="#">Dare To Curl: USA Curling Instructional Video</a>
		</div>
	</div>

	<div class="rvideo">
		<a href="#"><img class="vid" src="videos/disc_champs.jpg"></a>
		<div class="vid_text">
			<a href="#">2013 National Collegiate Disc Golf Championships</a>
		</div>
	</div>

	<div class="lvideo">
		<a href="#"><img class="vid" src="videos/roller.jpg"></a>
		<div class="vid_text">
			<a href="#">Roller Derby in Portland - Rose City Rollers</a>
		</div>
	</div>

	<div class="rvideo">
		<a href="#"><img class="vid" src="videos/football.jpg"></a>
		<div class="vid_text">
			<a href="#">LFL Canada - Nikki Johnson destroys Devine Burton</a>
		</div>
	</div>

	<a href="#"><img class="spanning_ad" src="ads/sponge_wide.png"></a>

</div>

<?
	// post recent stories
	recent(1);
?>

<div class="watch_spacer"></div>

<? 
// end html
footer(); 

?>