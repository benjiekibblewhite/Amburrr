$("nav li").hover(
  function() {
    $( this ).children("span").addClass( "hover" );
  }, function() {
    $( this ).children("span").removeClass( "hover" );
  }
);


$("#carousel").backstretch([
    "img/carousel/Carousel1.jpeg",
    "img/carousel/Carousel2.jpeg",
    "img/carousel/Carousel3.jpeg",
    "img/carousel/Carousel4.jpeg", 
    "img/carousel/Carousel5.jpeg",
  ], {fade: 2000}, {duration: 4000} );
  
 $('.carousel-prev').click(function(e) {
    e.preventDefault();
    $("#carousel").backstretch('prev');
});
  
$('.carousel-next').click(function(e) {
  e.preventDefault();
  $("#carousel").backstretch('next');
});
  
  



  
  
