$(function () {} );

	//variables
var today = moment().format("dddd, MMMM Do");

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

