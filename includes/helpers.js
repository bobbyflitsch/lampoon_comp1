/**************************************/
/********* Main Link Functions ********/
/**************************************/

document.onmousemove=getXYPosition;

// Cursor coordinate functions
var myX, myY, myMouseX, myMouseY;

var sport = false;

function getXYPosition(e)
{
	myMouseX=(e||event).clientX;
	myMouseY=(e||event).clientY;
	if (document.documentElement.scrollTop > 0)
		myMouseY = myMouseY + document.documentElement.scrollTop;

	// clear links if out of div
	if(sport && (myMouseX < 500 || myMouseX > 1650 || myMouseY > 105))
		clear_links();
}

function sport_on()
{
	// scrolled over
	sport = true;

	// show div
	var sports = document.getElementById("sports");
	sports.innerHTML = "<a class='sport' href= '#'>DODGEBALL</a><a class='sport' href= '#''>FRISBEE</a><a class='sport' href= 'quidditch.php'>QUIDDITCH</a><a class='sport' href= '#'>BO-TAOSHI</a><a class='sport' href= '#'>ROLLER DERBY</a><a class='sport' href= '#'>CHESS BOXING</a><a class='sport' href= '#'>CURLING</a><a class='sport' href= '#'>LINGERIE FOOTBALL</a>";
}

function clear_links()
{
	// reset sport
	sport = false;

	// reset div
	var sports = document.getElementById("sports");
	sports.innerHTML = "";

}

/**************************************/
/******** Scoreboard Functions ********/
/**************************************/

// white arrow when scrolling over
function larrow_over(x)
{
	x.style.borderRight = "26px solid #FFFFFF";
}

// normal arrow when off
function larrow_out(x)
{
	x.style.borderRight = "26px solid #4C92ED";
}

// scroll when arrow clicked
function larrow()
{
	// get scoreboard page number (kept in all_sports id div data)
	var all_sports = document.getElementById("all_sports");
	var num = all_sports.dataset.num;
	
	// don't move left if first page
	if(num == 2)
	{
		// update number
		num--;
		all_sports.dataset.num = num;
		
		// find out active sport
		var scoreboard_sport = document.getElementsByClassName("scoreboard_sport")[0].id;

		// get games div
		var games = document.getElementById("games");
		
		// update scoreboard for that sport
		if(scoreboard_sport == "Dodgeball")
			// Games for scoreboard
			var g1 = "<div class='game1'><div class='status'>2:54 G 3</div><div class='team1'>SBD</div><div class='team1score'>8</div><div class='team2'>LAC</div><div class='team2score'>4</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'><b>AJ'S</b></div><div class='team1score'>24</div><div class='team2' style='font-size:18.3px'>GGPC</div><div class='team2score'>23</div></div><div class='game3'><div class='status'>1:16 G 2</div><div class='team1'>CVD</div><div class='team1score'>4</div><div class='team2'>GSC</div><div class='team2score'>2</div></div><div class='game4'><div class='status'>4:02 G 5</div><div class='team1'>NYE</div><div class='team1score'>17</div><div class='team2'>TXS</div><div class='team2score'>14</div></div><div class='game5'><div class='status'>FINAL</div><div class='team1'>BUT</div><div class='team1score'>21</div><div class='team2'><b>AZR</b></div><div class='team2score'>24</div></div><div class='game6'><div class='status'>FINAL</div><div class='team1'><b>DDM</b></div><div class='team1score'>28</div><div class='team2'>VRP</div><div class='team2score'>27</div></div><div class='game7'><div class='status'>4:53 G 3</div><div class='team1'>MIB</div><div class='team1score'>10</div><div class='team2'>MNB</div><div class='team2score'>7</div></div><div class='game8'><div class='status'>3:20 G 1</div><div class='team1'>PHJ</div><div class='team1score'>0</div><div class='team2'>PTP</div><div class='team2score'>0</div></div><div class='game9'><div class='status'>FINAL</div><div class='team1'><b>HBH</b></div><div class='team1score'>29</div><div class='team2'>LVV</div><div class='team2score'>25</div></div><div class='game10'><div class='status'>5:00 G 2</div><div class='team1'>MSE</div><div class='team1score'>5</div><div class='team2'>HTG</div><div class='team2score'>5</div></div>";

		else if(scoreboard_sport == "Frisbee")
			// Games for scoreboard
			var g1 = "<div class='game1'><div class='status'>Frisbee 1</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game3'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game4'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game5'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game6'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game7'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game8'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game9'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game10'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div>";

		else if(scoreboard_sport == "Quidditch")
			// Games for scoreboard
			var g1 = "<div class='game1'><div class='status'>Quidditch 1</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game3'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game4'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game5'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game6'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game7'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game8'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game9'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game10'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div>";

		else if(scoreboard_sport == "Bo-Taoshi")
			// Games for scoreboard
			var g1 = "<div class='game1'><div class='status'>Bo-Taoshi 1</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game3'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game4'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game5'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game6'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game7'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game8'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game9'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game10'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div>";

		else if(scoreboard_sport == "Roller")
			// Games for scoreboard
			var g1 = "<div class='game1'><div class='status'>Roller 1</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game3'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game4'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game5'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game6'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game7'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game8'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game9'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game10'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div>";

		else if(scoreboard_sport == "Chess")
			// Games for scoreboard
			var g1 = "<div class='game1'><div class='status'>Chess 1</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game3'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game4'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game5'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game6'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game7'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game8'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game9'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game10'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div>";

		else if(scoreboard_sport == "Curling")
			// Games for scoreboard
			var g1 = "<div class='game1'><div class='status'>Curling 1</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game3'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game4'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game5'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game6'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game7'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game8'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game9'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game10'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div>";

		else
			// Games for scoreboard
			var g1 = "<div class='game1'><div class='status'>Football 1</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game3'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game4'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game5'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game6'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game7'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game8'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game9'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game10'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div>";


		// load new scoreboard
		games.innerHTML = g1;
	}
}

// white arrow when scrolling over
function rarrow_over(x)
{
	x.style.borderLeft = "26px solid #FFFFFF";
}

// normal arrow when off
function rarrow_out(x)
{
	x.style.borderLeft = "26px solid #4C92ED";
}

// scroll when arrow clicked
function rarrow()
{
	// get scoreboard page number (kept in all_sports id div data)
	var all_sports = document.getElementById("all_sports");
	var num = all_sports.dataset.num;
	
	// don't move right if last page
	if(num == 1)
	{
		// update number
		num++;
		all_sports.dataset.num = num;
		
		// find out active sport
		var scoreboard_sport = document.getElementsByClassName("scoreboard_sport")[0].id;

		// get games div
		var games = document.getElementById("games");
		
		// update scoreboard for that sport
		if(scoreboard_sport == "Dodgeball")
			// Games for scoreboard
			var g2 = "<div class='game1'><div class='status'>FINAL</div><div class='team1'><b>NYY</b></div><div class='team1score'>24</div><div class='team2'>RHU</div><div class='team2score'>17</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'><b>OAV</b></div><div class='team1score'><b>23</b></div><div class='team2'>SDC</div><div class='team2score'>17</div></div><div class='game3'><div class='status'>FINAL</div><div class='team1'>HVG</div><div class='team1score'>23</div><div class='team2'><b>HUF</b></div><div class='team2score'>29</div></div>";

		else if(scoreboard_sport == "Frisbee")
			// Games for scoreboard
			var g2 = "<div class='game1'><div class='status'>Frisbee 2</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'><b>OAV</b></div><div class='team1score'><b>23</b></div><div class='team2'>SDC</div><div class='team2score'>17</div></div><div class='game3'><div class='status'>FINAL</div><div class='team1'>JVB</div><div class='team1score'>24</div><div class='team2'><b>LMN</b></div><div class='team2score'>27</div></div>";

		else if(scoreboard_sport == "Quidditch")
			// Games for scoreboard
			var g2 = "<div class='game1'><div class='status'>Quidditch 2</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game3'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div>";

		else if(scoreboard_sport == "Bo-Taoshi")
			// Games for scoreboard
			var g2 = "<div class='game1'><div class='status'>Bo-Taoshi 2</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game3'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div>";

		else if(scoreboard_sport == "Roller")
			// Games for scoreboard
			var g2 = "<div class='game1'><div class='status'>Roller 2</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game3'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div>";

		else if(scoreboard_sport == "Chess")
			// Games for scoreboard
			var g2 = "<div class='game1'><div class='status'>Chess 2</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game3'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div>";

		else if(scoreboard_sport == "Curling")
			// Games for scoreboard
			var g2 = "<div class='game1'><div class='status'>Curling 2</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game3'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div>";

		else
			// Games for scoreboard
			var g2 = "<div class='game1'><div class='status'>Football 2</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game2'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div><div class='game3'><div class='status'>FINAL</div><div class='team1'>NYY</div><div class='team1score'>4</div><div class='team2'>NYM</div><div class='team2score'>3</div></div>";

		// load new scoreboard
		games.innerHTML = g2;
	}
}

// change color on sport hover
function sport_over(x)
{
	x.style.backgroundColor = "#FFFFFF";
	x.style.color = "#000000";
}

// change color back when off
function sport_out(x)
{
	x.style.backgroundColor = "#4C92ED";
	x.style.color = "#FFFFFF";
}

// expand the sports menu when clicked
function expand_sports(x)
{
	// bring div to front
	var all_sports = document.getElementById("all_sports");
	all_sports.style.backgroundColor = "#953735";
	all_sports.style.zIndex = "1";

	// text for sports
	var Dodgeball = "<div id='Dodgeball' data-active='true' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Dodgeball</div><div id='Frisbee' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Frisbee</div><div id='Quidditch' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Quidditch</div><div id='Bo-Taoshi' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Bo-Taoshi</div><div id='Roller' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Roller Derby</div><div id='Chess' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Chess Boxing</div><div id='Curling' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Curling</div><div id='Football' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'  style='padding-top:0px; height:45px;'>Lingerie Football</div>";
	var Frisbee = "<div id='Frisbee' data-active='true' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Frisbee</div><div id='Dodgeball' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Dodgeball</div><div id='Quidditch' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Quidditch</div><div id='Bo-Taoshi' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Bo-Taoshi</div><div id='Roller' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Roller Derby</div><div id='Chess' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Chess Boxing</div><div id='Curling' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Curling</div><div id='Football' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'  style='padding-top:0px; height:45px;'>Lingerie Football</div>";
	var Quidditch = "<div id='Quidditch' data-active='true' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Quidditch</div><div id='Dodgeball' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Dodgeball</div><div id='Frisbee' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Frisbee</div><div id='Bo-Taoshi' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Bo-Taoshi</div><div id='Roller' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Roller Derby</div><div id='Chess' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Chess Boxing</div><div id='Curling' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Curling</div><div id='Football' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'  style='padding-top:0px; height:45px;'>Lingerie Football</div>";
	var Bo_Taoshi = "<div id='Bo-Taoshi' data-active='true' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Bo-Taoshi</div><div id='Dodgeball' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Dodgeball</div><div id='Frisbee' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Frisbee</div><div id='Quidditch' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Quidditch</div><div id='Roller' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Roller Derby</div><div id='Chess' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Chess Boxing</div><div id='Curling' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Curling</div><div id='Football' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'  style='padding-top:0px; height:45px;'>Lingerie Football</div>";
	var Roller = "<div id='Roller' data-active='true' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Roller Derby</div><div id='Dodgeball' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Dodgeball</div><div id='Frisbee' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Frisbee</div><div id='Quidditch' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Quidditch</div><div id='Bo-Taoshi' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Bo-Taoshi</div><div id='Chess' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Chess Boxing</div><div id='Curling' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Curling</div><div id='Football' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'  style='padding-top:0px; height:45px;'>Lingerie Football</div>";
	var Chess = "<div id='Chess' data-active='true' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Chess Boxing</div><div id='Dodgeball' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Dodgeball</div><div id='Frisbee' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Frisbee</div><div id='Quidditch' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Quidditch</div><div id='Bo-Taoshi' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Bo-Taoshi</div><div id='Roller' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Roller Derby</div><div id='Curling' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Curling</div><div id='Football' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'  style='padding-top:0px; height:45px;'>Lingerie Football</div>";
	var Curling = "<div id='Curling' data-active='true' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Curling</div><div id='Dodgeball' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Dodgeball</div><div id='Frisbee' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Frisbee</div><div id='Quidditch' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Quidditch</div><div id='Bo-Taoshi' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Bo-Taoshi</div><div id='Roller' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Roller Derby</div><div id='Chess' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Chess Boxing</div><div id='Football' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'  style='padding-top:0px; height:45px;'>Lingerie Football</div>";
	var Football = "<div id='Football' data-active='true' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'  style='padding-top:0px; height:45px;'>Lingerie Football</div><div id='Dodgeball' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Dodgeball</div><div id='Frisbee' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Frisbee</div><div id='Quidditch' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Quidditch</div><div id='Bo-Taoshi' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Bo-Taoshi</div><div id='Roller' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Roller Derby</div><div id='Chess' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Chess Boxing</div><div id='Curling' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='update(this);'>Curling</div>";

	// check which clicked, and update accordingly (handled specifically so that order changes)
	if(x.id == "Dodgeball")

		// html to fill the extended div
		all_sports.innerHTML = Dodgeball;

	else if(x.id == "Frisbee")
	
		// html to fill the extended div
		all_sports.innerHTML = Frisbee;

	else if(x.id == "Quidditch")
	
		// html to fill the extended div
		all_sports.innerHTML = Quidditch;

	else if(x.id == "Bo-Taoshi")

		// html to fill the extended div
		all_sports.innerHTML = Bo_Taoshi;

	else if(x.id == "Roller")

		// html to fill the extended div
		all_sports.innerHTML = Roller;

	else if(x.id == "Chess")

		// html to fill the extended div
		all_sports.innerHTML = Chess;

	else if(x.id == "Curling")

		// html to fill the extended div
		all_sports.innerHTML = Curling;

	else

		// html to fill the extended div
		all_sports.innerHTML = Football;
}

// update the sport displayed in the scoreboard
function update(x)
{
	// get overarching div
	var all_sports = document.getElementById("all_sports");

	// text for sports
	var Dodgeball = "<div id='Dodgeball' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='expand_sports(this);'>Dodgeball</div>";
	var Frisbee = "<div id='Frisbee' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='expand_sports(this);'>Frisbee</div>";
	var Quidditch = "<div id='Quidditch' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='expand_sports(this);'>Quidditch</div>";
	var Bo_Taoshi = "<div id='Bo-Taoshi' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='expand_sports(this);'>Bo-Taoshi</div>";
	var Roller = "<div id='Roller' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='expand_sports(this);'>Roller Derby</div>";
	var Chess  = "<div id='Chess' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='expand_sports(this);'>Chess Boxing</div>";
	var Curling = "<div id='Curling' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='expand_sports(this);'>Curling</div>";
	var Football = "<div id='Football' class='scoreboard_sport' onmouseover='sport_over(this)'; onmouseout='sport_out(this)'; onclick='expand_sports(this);' style='padding-top:0px; height:45px;'>Lingerie Football</div>";

	// check which clicked, and update accordingly
	if(x.id == "Dodgeball")
	
		// update sports div html
		all_sports.innerHTML = Dodgeball;

	else if(x.id == "Frisbee")
	
		// update sports div html
		all_sports.innerHTML = Frisbee;

	else if(x.id == "Quidditch")
	
		// update sports div html
		all_sports.innerHTML = Quidditch;

	else if(x.id == "Bo-Taoshi")

		// update sports div html
		all_sports.innerHTML = Bo_Taoshi;

	else if(x.id == "Roller")

		// update sports div html
		all_sports.innerHTML = Roller;

	else if(x.id == "Chess")

		// update sports div html
		all_sports.innerHTML = Chess;

	else if(x.id == "Curling")

		// update sports div html
		all_sports.innerHTML = Curling;
	else

		// update sports div html
		all_sports.innerHTML = Football;

	// hide dropdown
	all_sports.style.backgroundColor = "transparent";
	all_sports.style.zIndex = "0";

	// reset scoreboard to 1st page if new sport
	if(!x.dataset.active)
	{
		rarrow();
		larrow();
	}
}

/**************************************/
/******** Main Story Functions ********/
/**************************************/

// global timer interval
var timerSpeed = 7000;		// 7 seconds
var timerInterval = setInterval("cycle(2)", timerSpeed);

// if circle clicked, kill timer for good
var clicked = false;

// load story #i
function load(x)
{
	// 3 different stories' html
	var s1 = escape("<div class='circle1' id='active' style='background-color: #953735' onmouseover='c_over(this)' onmouseout='c_out(this)' onclick='c(this)' style='cursor:default'></div><div class='circle2' id='c2' style='background-color: #558ED5' onmouseover='c_over(this)' onmouseout='c_out(this)' onclick='c(this)'></div><div class='circle3' id='c3' style='background-color: #558ED5' onmouseover='c_over(this)' onmouseout='c_out(this)' onclick='c(this)'></div><div class='story_text'><img class='story_img' src='images/fans.jpg' onclick='pic_click()'><a href='major-league-ultimate-on-the-r.php' class='story_headline'><h1>Major League Ultimate On The Rise</h1></a><div><h2>ARLINGTON - You know that flying disc you threw around in college or use to play fetch with your dog? Well, now people are being paid to throw that same disc professionally. They aren't paid much, around $25 a game, but all of the expenses - travel, lodging, uniforms and ...</h2></div></div>");
	var s2 = escape("<div class='circle1' id='c1' style='background-color: #558ED5' onmouseover='c_over(this)' onmouseout='c_out(this)' onclick='c(this)'></div><div class='circle2' id='active' style='background-color: #953735' onmouseover='c_over(this)' onmouseout='c_out(this)' onclick='c(this)'></div><div class='circle3' id='c3' style='background-color: #558ED5' onmouseover='c_over(this)' onmouseout='c_out(this)' onclick='c(this)'></div><div class='story_text'><img class='story_img' src='images/canada.jpg' onclick='pic_click()'><a href='#' class='story_headline'><h1>Clean Sweep: Canada Shuts Out Jamaica In Championship Series</h1></a><div><h2>KINGSTON - In what was a crippling defeat for the home country in last night's first round matchup between ...</h2></div></div>");
	var s3 = escape("<div class='circle1' id='c1' style='background-color: #558ED5' onmouseover='c_over(this)' onmouseout='c_out(this)' onclick='c(this)'></div><div class='circle2' id='c2' style='background-color: #558ED5' onmouseover='c_over(this)' onmouseout='c_out(this)' onclick='c(this)'></div><div class='circle3' id='active' style='background-color: #953735' onmouseover='c_over(this)' onmouseout='c_out(this)' onclick='c(this)'></div><div class='story_text'><img class='story_img' src='images/bo-taoshi.jpg' onclick='pic_click()'><a href='#' class='story_headline'><h1>Korean Bo-Taoshi Star Suffocates In 3rd Round Of Match</h1></a><div><h2>TOKYO - In an international matchup yesterday afternoon, South Korean National Bo-Taoshi athlete Ji Yong  ...</h2></div></div>");

	// move block to animate
	block = document.getElementById("block");

	// swipe block away
	block.style.marginLeft="-835px";

	if(x == 1)
		document.getElementById("main_story").innerHTML = unescape(s1);

	else if(x == 2)
		document.getElementById("main_story").innerHTML = unescape(s2);

	else 
		document.getElementById("main_story").innerHTML = unescape(s3);

	// change active circle to cursor:default
	document.getElementById("active").style.cursor = "default";
}

// change circle color if not active
function c_over(x)
{
	if (x.style.backgroundColor == "rgb(85, 142, 213)")
		x.style.backgroundColor = "rgb(229, 229, 229)";
}

// change circle color back if not active
function c_out(x)
{
	if (x.style.backgroundColor == "rgb(229, 229, 229)")
		x.style.backgroundColor = "rgb(85, 142, 213)";
}

// change main story settings if circle clicked
function c(x)
{
	// make sure story is active
	if(x.style.backgroundColor != "rgb(149, 55, 53)")
	{

		// move block on
		block = document.getElementById("block");
		block.style.marginLeft="-25px";

		// wait a second
		var id = window.setTimeout(function()
		{

		// stop timer from reloading on this page load
		clicked = true;

		// figure out which was clicked and change story. Stop stories from cycling if clicked
		if(x.id == "c1")
			load(1);

		else if(x.id == "c2")
			load(2);

		else
			load(3);

		}, 1000);
	}
}

// cycles to next story if picture clicked
function pic_click()
{
	// find active story
	active = document.getElementById("active");

	// move block on
		block = document.getElementById("block");
		block.style.marginLeft="-25px";

		// wait a second
		var id = window.setTimeout(function()
		{

	// load next story (timer shouldn't stop for pic click)
	if(active.className == "circle1")
		load(2);

	else if(active.className == "circle2")
		load(3);

	else
		load(1);}, 1000);
			
}

// cycle story every 10 seconds
function cycle(x)
{
	// make sure loops after 3rd
	if(x == 3)
	{

		// move block on
		block = document.getElementById("block");
		block.style.marginLeft="-25px";

		// wait a second
		var id = window.setTimeout(function()
		{
		// update html
		load(3);

		// restart loop (if circle not clicked)
		clearInterval(timerInterval);

		if(!clicked)
			timerInterval = setInterval(function(){cycle(1)}, timerSpeed);}, 1000);
	}

	// not 3rd
	else
	{
		// move block on
		block = document.getElementById("block");
		block.style.marginLeft="-25px";

		// wait a second
		var id = window.setTimeout(function()
		{
		// update html
		load(x);

		// restart loop (if circle not clicked)
		clearInterval(timerInterval);

		if(!clicked)
			timerInterval = setInterval(function(){cycle(x+1)}, timerSpeed);}, 1000);
	}
}