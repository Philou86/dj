
$(document).ready(function(){
  $('.big-title').css("opacity", "0");
  $('.big-title2').css("opacity", "0");
  $('.phil-card').css("opacity", "0");
  $('nav').css("opacity", "0");
  $('.scroll-down').css("opacity", "0");
  $('.bg-image2').css("opacity", "0");

  $('.big-title').animate({opacity: 1}, 1200, function(){
    $('.big-title2').animate({opacity: 1}, 1200);
    $('.scroll-down').animate({opacity: 1}, 1200);
  });


  $('.bg-image').addClass("filter-blur");
  $('.bg-image2').addClass("filter-blur");
})

$(window).scroll(function(){
  $('.phil-card').animate({opacity: 1}, 800);
  $('nav').animate({opacity: 1}, 800);
  $('.scroll-down').remove();
})

// NAVBAR HIDING WHEN FOOTER IS REACHED

$(window).scroll(function() {
    if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
      $("#navbar").fadeOut(800);
    } else {
      $("#navbar").fadeIn(400);
    }
});

//LAZY LOAD
$(function() {
    $('body').loadScroll();
    $('iframe').loadScroll();
    $('img').loadScroll();
});


// RESPONSIVE

$(function(){
  if($(window).width() < 576){
    $('.bg-image').remove();
    $('.bg-image2').css("opacity", "1");;
  }
})
//
// $(function(){
//   if($(window).width() > 576){
//     $('.bg-image2').remove();
//   }
// })


// $(function(){
//   if($(window).width() > 1199.98){
//     $('.arrow-black').remove();
//   }
// })

// $(function(){
//   if($(window).width() < 1199.98){
//
//   }
// })
