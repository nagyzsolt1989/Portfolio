
//Loading screen
$(window).load(function() {
    $(".loader").fadeOut("slow");
});

$(document).ready(function() {
    $(window).stellar();
    
});

jQuery(document).ready(function(){

    /*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
    $(window).on("load",function() {
        function slideup() {
            var animation_height = $(window).innerHeight() * 0.01;

            //iterate through elements to see if its in view
            jQuery('.skillbar').each(function() {

                var objectTop = $(this).offset().top;
                var windowBottom = $(window).scrollTop() + $(window).innerHeight();

                if ( objectTop < windowBottom ) {
                    if ( objectTop < windowBottom - animation_height ) {
                        $(this).css( {opacity: 1} );

                        jQuery(this).find('.skillbar-bar').animate({
                            width:jQuery(this).attr('data-percent')
                        },6000);



                    }
                }
            });
        }
       // $('.skillbar').css( 'opacity', 0 );
        slideup();
        $(window).scroll(function() {slideup();});
    });

});

$(document).ready(

  function() { 

    $("html").niceScroll({
        cursorcolor:"rgba(30,30,30,.5)",
        zindex:999,
        scrollspeed:100,
        mousescrollstep:50,
        cursorborder:"0px solid #fff"
    });
      

  }

);

$(window).on("load",function() {
    function bouncein() {
        var animation_height = $(window).innerHeight() * 0.1;

        $('.ninja').each(function() {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
                    $(this).css( {

                        opacity: 1
                    } );
                    $(this).addClass("bounceIn");

                }
            }
        });
    }
    $('.ninja').css( 'opacity', 0 );
    bouncein();
    $(window).scroll(function() {bouncein();});
});

$(window).on("load",function() {
    function fadein() {
        var animation_height = $(window).innerHeight() * 0.1;

        $('.icon').each(function() {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if ( objectTop < windowBottom ) {
                if ( objectTop < windowBottom - animation_height ) {
                    $(this).css( {

                        opacity: 1
                    } );
                    $(this).addClass("fadeIn");

                }
            }
        });
    }
    $('.icon').css( 'opacity', 0 );
    fadein();
    $(window).scroll(function() {fadein();});
});



