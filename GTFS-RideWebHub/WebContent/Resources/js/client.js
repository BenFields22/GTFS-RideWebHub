var ans;

document.addEventListener("DOMContentLoaded", function() {
  speak();
});

function speak()
{
	//document.getElementById("Main").innerHTML = "Hello";
}

function presentDataEntry()
{
	var html =
		'<div class="questions">\
		<p>Select the option that best describes your data:</p>\
		<form action="">\
		  <input type="radio" name="question1" onclick="setVal(this.value)" value="1">Validated GTFS-ride feed<br>\
		  <input type="radio" name="question1" onclick="setVal(this.value)" value="2">Unvalidated GTFS-ride feed<br>\
		  <input type="radio" name="question1" onclick="setVal(this.value)" value="3">GTFS feed<br>\
		  <input type="radio" name="question1" onclick="setVal(this.value)" value="4">Partial GTFS-ride feed<br><br>\
\
		  <input type="submit" value="Submit form" onclick="ProcessAnswer()">\
		</form>\
\
		</div>';
	document.getElementById("main").innerHTML = html;
}

function speakAbout()
{
	document.getElementById("main").innerHTML = 
	"<p>This project is being developed with The Oregon Department of Transportation (ODOT) and Oregon State University."+
	"<br>This software platform is for the support of the GTFS-ride feed specification." +
	"<br>The GTFS-ride feed specification can be found at <a href=\"https://github.com/ODOT-PTS/GTFS-ride\">https://github.com/ODOT-PTS/GTFS-ride</a>" +
	"</p>";
}

function setVal(val)
{
	ans = val;
}

function ProcessAnswer()
{
	document.getElementById("main").innerHTML = "You answered "+ ans;
	if (ans=='3')
		{
		showInput()
		}
	
}

function showInput()
{
	document.getElementById("main").innerHTML = 
		'Please enter the data for ride_feed_info.txt<br>\
		<strong>Ridefiles</strong><input type="text" id="ridefiles"><br>\
		Ride_start_date<input type="text" id="ride_start_date"><br>\
		Ride_end_date<input type="text" id="ride_end_date"><br>\
		gtfs_feed_date<input type="text" id="gtfs_feed_date"><br>\
		default_currency_type<input type="text" id="default_currency_type"><br>\
		ride_feed_version<input type="text" id="ride_feed_version"><br>\
		<button type="button" onclick="">Submit</button>\
		<br>*<strong>bolded</strong> fields are required<br>\
		'
}

