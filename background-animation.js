var $win = $(window);
var $plane = $('.plane');
var lastScrollTop = 0;
var $button = $('.hoverbutton');


$(document).ready(function(){
     $win.on('scroll',function() {
          var st = $(this).scrollTop();
          var top= ($win.scrollTop());
          var width= $win.width();
          var percent= top*width*0.0012;
          var maxdisplacement = 0.7*width;
      
          if (st > lastScrollTop){
              $plane.css('transform', 'translateX(' +percent+ 'px) scaleX(1)');
         } else {
              $plane.css('transform', 'translateX(' +percent+ 'px) scaleX(-1)');
         }
         lastScrollTop = st;
      
         if (percent > maxdisplacement){
              $plane.fadeOut(200);
         } else {
              $plane.fadeIn(200);
         }
      });


     $button.hover(function(){
          $(this).css('transform', 'scale(1.5,1.5)');
          $(this).css({"transition":"0.5s"})
     }, function(){
          $(this).css('transform', 'scale(1,1');
     });

     $button.click(function(){
          $(this).css('filter', 'opacity(50%)');
     });


  /* Check the location of each element */
  $('.fadein').each( function(i){
  
     var bottom_of_object= $(this).offset().top + $(this).outerHeight();
     var bottom_of_window = $(window).height();
     
     if( bottom_of_object > bottom_of_window){
       $(this).addClass('hidden');
     }
   });
   
   
   $(window).scroll( function(){
       /* Check the location of each element hidden */
       $('.hidden').each( function(i){
         
           var bottom_of_object = $(this).offset().top + $(this).outerHeight();
           var bottom_of_window = $(window).scrollTop() + $(window).height();
           $(this).css({'opacity':'0%'});
         
           /* If the object is completely visible in the window, fade in */
           if( bottom_of_window > bottom_of_object ){
            $(this).css({'opacity':'100%','transition': '1s'}).removeClass('hidden');
           }
       });
   });



});

  /* Check the location of each element */
  $('.swiperight').each( function(i){
  
    var bottom_of_object= $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).height();
    
    if( bottom_of_object > bottom_of_window){
      $(this).addClass('lefthidden');
    }
  });
  
  
  $(window).scroll( function(){
      /* Check the location of each element hidden */
      $('.lefthidden').each( function(i){
        
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          $(this).css({'left':'-6vw','opacity':'0%'});
        
          /* If the object is completely visible in the window, swipe right */
          if( bottom_of_window > bottom_of_object ){
            $(this).css({'left':'0%','opacity':'100%', 'transition':'1s'}).removeClass('lefthidden');
          }
      });
  });


    /* Check the location of each element */
    $('.swipeleft').each( function(i){
  
      var bottom_of_object= $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).height();
      
      if( bottom_of_object > bottom_of_window){
        $(this).addClass('righthidden');
      }
    });
    
    
    $(window).scroll( function(){
        /* Check the location of each element hidden */
        $('.righthidden').each( function(i){
          
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            $(this).css({'left':'6vw','opacity': '0%'});
          
            /* If the object is completely visible in the window, swipe right */
            if( bottom_of_window > bottom_of_object ){
              $(this).css({'left':'0%','opacity':'100%','transition':'1s'}).removeClass('righthidden');
            }
        });
    });





   $(document).ready(function(){

     // Add smooth scrolling on all links inside the navbar
     $(".navbar-nav a").on('click', function(event) {
       // Make sure this.hash has a value before overriding default behavior
       if (this.hash !== "") {
         // Prevent default anchor click behavior
         event.preventDefault();
   
         // Store hash
         var hash = this.hash;
   
         // Using jQuery's animate() method to add smooth page scroll
         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
         $('html, body').animate({
           scrollTop: $(hash).offset().top
         }, 800, function(){
      
           // Add hash (#) to URL when done scrolling (default click behavior)
           window.location.hash = hash;
         });
       }  // End if
     });
   });

