// Javascript
$(function() {
  var currentDate = new Date("May 30, 2020 21:42:10").getTime();
//  $('.countdown').countdown("yyyy/MM/dd/hh:mm:ss", function(event)
//	Delete line 6
  $('.time').countdown(currentDate.valueOf(), function(event)
//	until here
	{
    $this = $(this);
    switch(event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      case "weeks":
      case "daysLeft":
        $this.find('span.'+event.type).html(event.value);
        break;
      case "finished":
		document.getElementById("main_head").style.display="none";
		document.getElementById("about").style.display="none";
        document.getElementById("exam").style.display="block";
        document.getElementById("instruct").style.display="block";
		document.getElementById("p1").innerHTML = "INSTRUCTIONS";
        $this.fadeTo('slow', .5);
        break;
    }	 
  });
});
