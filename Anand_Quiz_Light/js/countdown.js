// Javascript
$(function() {
  var currentDate = new Date("July 25, 2020 13:00:10").getTime();
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
		document.getElementById("p1").innerHTML = "GUIDELINES";
		document.getElementById("p2").innerHTML = "Read exam guideline carefully";
		document.getElementById("infor").innerHTML = "Exam Results will be updated through a webinar on 28th July by Technical Committee members of IBM and Sapient.";
        $this.fadeTo('slow', .5);
        break;
    }	 
  });
});
