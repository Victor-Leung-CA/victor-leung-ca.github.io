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
          var maxdisplacement = 0.75*width;
      
          if (st > lastScrollTop){
              $plane.css('transform', 'translateX(' +percent+ 'px) scaleX(1)');
         } else {
              $plane.css('transform', 'translateX(' +percent+ 'px) scaleX(-1)');
         }
         lastScrollTop = st;
      
         if (percent > maxdisplacement){
              $plane.fadeOut();
         } else {
              $plane.fadeIn();
         }
      });

     $button.hover(function(){
          $(this).css('transform', 'scale(1.5,1.5)');
     }, function(){
          $(this).css('transform', 'scale(1,1');
     });

     $button.click(function(){
          $(this).css('filter', 'opacity(50%)');
     });

});