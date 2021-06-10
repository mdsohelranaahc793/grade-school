$(document).ready(function(){
  $('.nav-item').click(function(){
    $(this).addClass('active2').siblings().removeClass('active2');
  });
  
  $('.owl-carousel').owlCarousel({
    items:2,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 1000,
    loop: true,
    responsive:{
      0: {
        items:1
      },
      768: {
        items: 2
      }
    }
  });
  
  
})

