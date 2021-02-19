$(function () {} );

	//variables
var today = moment().format("dddd, MMMM Do");

var now = moment().format("H A");

var planner = [
	{time: "9 AM", event: "" },
	{time: "10 AM", event: "" },
	{time: "11 AM", event: "" },
	{time: "12 AM", event: "" },
	{time: "1 PM", event: "" },
	{time: "2 PM", event: "" },
	{time: "3 PM", event: "" },
	{time: "4 PM", event: "" },
	{time: "5 PM", event: "" }
];

	//get localstorage
var events = JSON.parse(localStorage.getItem("workDay"));
if (events) {
	planner = events;
}

	//current date displayed
$("#currentDay").text(today);

	//timeblock
planner.forEach(function(timeBlock, index) {
	var timeLabel = timeBlock.time
	var blockColor = colorRow(timeLabel);
	var row = 
	'<div class="time-block" id="' + index + 
	'"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
	timeLabel + '</div><textarea class="form-control ' + blockColor + '">' + timeBlock.event +
	'</textarea><div class="col-sm col-lg-1 input-group-append"><button type="button" class="saveBtn btn-block"><i class="fas fa-save"></i></button></div></div></div>';

	$(".container").append(row);
});

	//color time past, present, future 
function colorRow(time) {
	var planNow = moment(now, "H A");
	var planEntry = moment(time, "H A");
	if (planNow.isBefore(planEntry) === true) {
		return "future";
	} else if (planNow.isAfter(planEntry) === true) {
		return "past";
	} else {
		return "present";
	}
}

	//save 
$(".saveBtn").on("click", function() {
	var block = parseInt(
		$(this)
		.closest(".time-block")
		.attr("id")
	);
	var entry = $.trim(
		$(this)
		.parent()
		.siblings("textarea")
		.val()
	);
	planner[block].event = entry
	
		//set localstorage
	localStorage.setItem("workDay", JSON.stringify(planner))
});

