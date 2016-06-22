$(document).ready(function(){

    $("nav a").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
    });

});


var nav = $("nav");

$(window).scroll(function() {
  if ($(this).scrollTop() > $("#video").height()*0.5) {
    nav.addClass("nav-scrolled");
  } else {
    nav.removeClass("nav-scrolled");
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > $("#video").height()*0.7) {
    nav.removeClass("navbar-dark");
    nav.addClass("navbar-light nav-blue");
  } else {
    nav.removeClass("navbar-light nav-blue");
    nav.addClass("navbar-dark");
  }
});
