<?

    // require common code
    require_once("includes/common.php");

    setup("Home");

?>
      <div class="main_story" id="main_story">
      	<div class="circle1" id="c1" style="background-color: #953735" onmouseover="c_over(this)" onmouseout="c_out(this)" onclick="c(this)"></div>
      	<div class="circle2" id="c2" style="background-color: #558ED5" onmouseover="c_over(this)" onmouseout="c_out(this)" onclick="c(this)"></div>
      	<div class="circle3" id="c3" style="background-color: #558ED5" onmouseover="c_over(this)" onmouseout="c_out(this)" onclick="c(this)"></div>
        <div class='story_text'>
          <img class='story_img' src='#' onclick="pic_clicked();">
          <a href='major-league-ultimate-on-the-r.php' class='story_headline'><h1>Major League Ultimate On The Rise</h1></a>
          <div><h2>ARLINGTON - You know that flying disc you threw around in college or use to play fetch with your dog? Well, now people are being paid to throw that same disc professionally. They aren't paid much, around $25 a game, but all of the expenses - travel, lodging, uniforms and ...</h2></div>
        </div>
      </div>

<?
  // post recent stories
  recent(1);
?>

      <div class="space">
        <a href="#"><img class="ad" src="ads/becomefaster.jpg" alt="advertisement"></a>
      	<a href="#"><img class="ad" src="ads/hulu.jpg" alt="advertisement"></a>
        <a href="#"><img class="ad" src="ads/waterproof.jpg" alt="advertisement"></a>
      </div>

    <div class="block" id="block"></div>

<?
  // post video headlines
  video_headlines(1);
 
  // end html
  footer(); 

?>