var $win = $(window);
var $plane = $('.object');
var lastScrollTop = 0;

$win.on('scroll',function() {
    var st = $(this).scrollTop();
    var top= ($win.scrollTop());
    var width= $win.width();
    var percent= top*width*0.002;

    if (st > lastScrollTop){
        $plane.css('transform', 'translateX(' +percent+ 'px) scaleX(1)');
   } else {
        $plane.css('transform', 'translateX(' +percent+ 'px) scaleX(-1)');
   }
   lastScrollTop = st;
});

