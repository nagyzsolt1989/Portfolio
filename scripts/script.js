jQuery(document).ready(function()
{

    /* Preloader */
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 5000);

    //Animate progress-bars when shown
    function showup()
    {
        var animation_height = $(window).innerHeight() * 0.01;

        //iterate through elements to see if its in view
        $(".progress-bar").each(function()
        {
            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if ( objectTop < windowBottom)
            {
                if (objectTop < windowBottom - animation_height)
                {
                    each_bar_width = $(this).attr('aria-valuenow');
                    $(this).width(each_bar_width + '%');

                    $(document).ready(function () {
                        $(window).stellar();
                    });
                }
            }
        });

    }
    showup();
    $(window).scroll(function() {showup();});

    /* Show tooltips on skillbars */

    $(function () {
        $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
    });

    /* Gallery item displays portfolio item detailed view*/

    $('.gallary-item a').click(function(){
        var page = $(this).attr('href');
        $('#portfolio-item').empty();
        $('html, body').animate({scrollTop:$('#portfolio').position().top}, "slow");
        $('#portfolio-item').show().empty().load(page).slideDown("fast");
        return false;
    });


    /* Skill Panel's animation */

    function bouncein() {
        var animation_height = $(window).innerHeight() * 0.1;

        $('.ninja').each(function () {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if (objectTop < windowBottom) {
                if (objectTop < windowBottom - animation_height) {
                    $(this).css({

                        opacity: 1
                    });
                    $(this).addClass("bounceIn");

                }
            }
        });
    }

    $('.ninja').css('opacity', 0);
    bouncein();
    $(window).scroll(function () {
        bouncein();
    });

    /* Portfolio Grid */

    $(window).load(function() {
        var $container = $('.animate-grid .gallary-thumbs');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.animate-grid .categories a').click(function() {
            $('.animate-grid .categories .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });

    /* Animate icons when in view in Contact panel*/

    function fadein() {
        var animation_height = $(window).innerHeight() * 0.1;

        $('.icon').each(function () {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight()

            if (objectTop < windowBottom) {
                if (objectTop < windowBottom - animation_height) {
                    $(this).css({

                        opacity: 1
                    });
                    $(this).addClass("fadeIn");

                }
            }
        });
    }

    $('.icon').css('opacity', 0);
    fadein();
    $(window).scroll(function () {
        fadein();
    });

    /* Scrolling animation for Parallax */

    $("html").niceScroll({
        cursorcolor:"rgba(30,30,30,.5)",
        zindex:999,
        scrollspeed:100,
        mousescrollstep:50,
        cursorborder:"0px solid #fff"
    });

});

/* Function for the Animated Close Button in Detailed portfolio view*/

function toggler(divId) {
    $("#" + divId).slideToggle("fast");
    $("#" + divId).css("display", "block");
}

/* 5321-8089-2166-4022 */


