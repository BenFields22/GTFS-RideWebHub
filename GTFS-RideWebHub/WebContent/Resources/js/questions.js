var answer;
var fileEdit;
var def = '<p>Please Select the option that best describes your data:<br>\
	<input onclick= updateAns(this) type="radio" name="dataType" value="1"> Complete unvalidated GTFS-ride feed<br>\
	<input onclick= updateAns(this) type="radio" name="dataType" value="2"> Complete validated GTFS-ride feed<br>\
	<input onclick= updateAns(this) type="radio" name="dataType" value="3"> Partial GTFS-ride feed<br>\
	<input onclick= updateAns(this) type="radio" name="dataType" value="4"> GTFS feed<br>\
	<input  type="submit" value= "Submit" onclick="return checkAnswer()"> \
</p>';

$(document).ready(function(){
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		  // Great success! All the File APIs are supported.
		//alert('Supported');
		} else {
		  alert('The File APIs are not fully supported in this browser.');
		}
	
});


function checkAnswer(passForm)
{
	//str = "you chose "+ answer;
	//alert(str);
	if(answer=='1')
		{
		//unvalidated gtfs-ride file
			$('#dataPanel').html('<p>Please validate your feed before continue with the data upload process.' +
				'The validation tool can be found at <a target=# href="https://github.com/ODOT-PTS/transitfeed-ride">https://github.com/ODOT-PTS/transitfeed-ride</a></p>');
			$('#dataPanel').append('<input type=button value="Back" onclick="refresh()">');
		}
	else if(answer=='2')
		{
			//complete validated gtfs-ride feed
		$('#dataPanel').html('<p><strong>Please select and upload your validated GTFS-ride feed in a zip file format</strong></p>'+
				'<div class="fileButton"><strong>GTFS-ride feed: </strong><input type="file" id="GTFSrideFeed"></div><br>');
		
	$('#dataPanel').append(' <input type=button value="Upload to Database" onclick=#0> ');
	$('#dataPanel').append('<input type=button value="Create Zip" onclick=#0>  ');
	$('#dataPanel').append('<input type=button value="Back" onclick="refresh()">');
	$('.fileButton').css("color","black");
		}
	else if(answer=='3')
		{
		//partial gtfs ride feed
		$('#dataPanel').html('<p><strong>Please select and upload your GTFS feed file in a zip file format</strong></p>'+
		'<div class="fileButton"><strong>GTFS feed: </strong><input type="file" id="GTFSFeed"></div><br>');

		
			$('#dataPanel').append(
				'<p>Select the files that need to be completed: <br>'+
					'<input type="checkbox" name="files" value="1"> Rider_feed_info.txt<br>'+
					'<input type="checkbox" name="files" value="2"> board_alight.txt<br>'+
					'<input type="checkbox" name="files" value="3">rider_trip.txt<br>'+
					'<input type="checkbox" name="files" value="4"> ridership.txt<br>'+
					'<input type="checkbox" name="files" value="5"> trip_capacity.txt<br>'+
					'<input type="submit" value="Continue"></p>'
					);

			$('#dataPanel').append(' <input type=button value="Upload to Database" onclick=#0> ');
			$('#dataPanel').append('<input type=button value="Create Zip" onclick=#0>  ');
			$('#dataPanel').append('<input type=button value="Back" onclick="refresh()">');
			$('.fileButton').css("color","black");
		}
	else if(answer=='4')
		{
		//only gtfs data
		$('#dataPanel').html('<p><strong>Please select and upload your GTFS feed file in a zip file format</strong></p>'+
		'<div class="fileButton"><strong>GTFS feed: </strong><input type="file" id="GTFSFeed"></div><br>');
		$('#dataPanel').append('<p>Please enter the data for your GTFS-ride feed:<br>'+
				'ride_feed_info.txt <input type="submit" onclick="enterData(1)" value="Edit"> <br>'+
				'board_alight.txt <input type="submit" onclick="enterData(2)" value="Edit"> <br>'+
				'rider_trip.txt <input type="submit" onclick="enterData(3)" value="Edit"> <br>'+
				'ridership.txt <input type="submit" onclick="enterData(4)" value="Edit"> <br>'+
				'trip_capacity.txt <input type="submit" onclick="enterData(5)" value="Edit"> <br>'
				);
		

			$('#dataPanel').append(' <input type=button value="Upload to Database" onclick=#0> ');
			$('#dataPanel').append('<input type=button value="Create Zip" onclick=#0>  ');
			$('#dataPanel').append('<input type=button value="Back" onclick="refresh()">');
			$('.fileButton').css("color","black");
			$('#dataPanel').append('<div id="editData"></div>');
		}
	
	var selectedContent = $('li[data-content="Data Entry"]');
	var slectedContentHeight = selectedContent.innerHeight();
	$('.cd-tabs-content').animate({
		'height': slectedContentHeight
	}, 200);
	return false;
}

function clearEdit(){
	$('#editData').html("");
	var selectedContent = $('li[data-content="Data Entry"]');
	var slectedContentHeight = selectedContent.innerHeight();
	$('.cd-tabs-content').animate({
		'height': slectedContentHeight
	}, 200);
}

function enterData(i){
	if(i==1)
		{
			$('#editData').html('<br><div class="editPanel">'+
					'<br><strong>ride_files</stong> <input type="number" name="numFiles" min="0" max="6"><br>'+
					'ride_start_date <input type="text" name="ride_start_date"> (format YYYYMMDD)<br>'+
					'ride_end_date <input type="text" name="ride_end_date"> (format YYYYMMDD)<br>'+
					'gtfs_feed_date <input type="text" name="gtfs_feed_date"> (format YYYYMMDD)<br>'+
					'default_currency_type <input type="text" name="default_currency_type"> <br>'+
					'ride_feed_version <input type="text" name="ride_feed_version"> <br>'+
					'</div>');
		}
	else if(i==2)
	{
		$('#editData').html('<br><div class="editPanel"><br>board_alight</div>');
	}
	else if(i==3)
	{
		$('#editData').html('<br><div class="editPanel"><br>rider_trip</div>');
	}
	else if(i==4)
	{
		$('#editData').html('<br><div class="editPanel"><br>ridership</div>');
	}
	else if(i==5)
	{
		$('#editData').html('<br><div class="editPanel"><br>trip_capacity</div>');
	}
	
	$('#editData').append('<input type=button value="Create" onclick=#0>');
	$('#editData').append('<input type="submit" value="close" onclick="clearEdit()">');
	var selectedContent = $('li[data-content="Data Entry"]');
	var slectedContentHeight = selectedContent.innerHeight();
	$('.cd-tabs-content').animate({
		'height': slectedContentHeight
	}, 200);
}

function refresh()
{
	$('#dataPanel').html(def);
	var selectedContent = $('li[data-content="Data Entry"]');
	var slectedContentHeight = selectedContent.innerHeight();
	$('.cd-tabs-content').animate({
		'height': slectedContentHeight
	}, 200);
	return false;
}

function updateAns(formButtom)
{
	answer = formButtom.value;
}