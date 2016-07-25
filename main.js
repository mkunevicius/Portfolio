// nav elements leads to scrolling to body parts
$(document).ready(function(){

    $("nav a").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
    });

});




// smoothly catching and scrolling with menu
var nav = $(".navbar");

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




// Fibonacci sequence written in JavaScript
// function Fibonacci() {
//   this.recursive = function(n) {
//     if (n <= 2) {
//       return 1;
//     } else {
//       return this.recursive(n - 1) + this.recursive(n - 2);
//     }
//   }
// }
//
// var f = new Fibonacci();
// var sequence = "";
// for (var i = 1; i <= 15; i++) {
//   sequence += f.recursive(i) + " ";
// }
// console.log('Fibonacci sequence starts with: ', sequence + '...');
