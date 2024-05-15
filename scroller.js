var yourNavigation = $("#navnav");
var enquiry = $("#enquiry")
stickyDiv = "sticky";
$(window).scroll(function() {
  console.log($(this).scrollTop());
  if( $(this).scrollTop() > 136 ) {
    yourNavigation.addClass(stickyDiv);
    
    enquiry.addClass("stickye");

  } else {
    yourNavigation.removeClass(stickyDiv);
    enquiry.removeClass("stickye");
  }
});