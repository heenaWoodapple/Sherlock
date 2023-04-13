$(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
        $('header').addClass("fixedheader");
    } else {
        $('header').removeClass("fixedheader");
    }
});
$(document).ready(function () {
    $(".icons a").click(function () {


        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 100
            }, 1000);
            return false;
        }
    });
    AOS.init({
        duration: 1200,
        disable: window.innerWidth < 768,
    });


    $(".menubutton").click(function () {
        $(".overlay").addClass("overlay-menushow");
        $(".header-mobile").slideDown();
    });
    $(".close-button").click(function () {
        $(".header-mobile").slideUp();
    });
    $('.iconsfirst').addClass('fixed');
    $(window).scroll(function () {
        var elementOffset = $('.quantity').offset().top;
        var elementOffset1 = $('.quantitysecond').offset().top; 
        var elementOffset2 = $('.quantitythree').offset().top;
        var elementOffset3 = $('.quantityfour').offset().top;
        var elementOffset4 = $('.quantityfive').offset().top;

        var scrollTop = $(window).scrollTop();
        var st = $(this).scrollTop();
        var st1 = $(".iconssecond").scrollTop();
       
      
        if (window.matchMedia("(min-width: 768px)").matches) {
            if (st >= elementOffset - 660) {
                $('.iconsfirst').removeClass('fixed');
            }
            else {
                $('.iconsfirst').addClass('fixed');
            }

            if (scrollTop > 760) {
                $('.iconssecond').addClass('fixed');
            }
            else {
                $('.iconssecond').removeClass('fixed');
            }
            if (st > elementOffset1 - 660) {
                $('.iconssecond').removeClass('fixed');
            }

            if (scrollTop > 1650) {
                $('.iconsthree').addClass('fixed');
            }
            else {
                $('.iconsthree').removeClass('fixed');
            }
            if (st > elementOffset2 - 660) {
                $('.iconsthree').removeClass('fixed');
            }

            if (scrollTop > 2500) {
                $('.iconsfour').addClass('fixed');
            }
            else {
                $('.iconsfour').removeClass('fixed');
            }
            if (st > elementOffset3 - 660) {
                $('.iconsfour').removeClass('fixed');
            }

            if (scrollTop > 3350) {
                $('.iconsfive').addClass('fixed');
            }
            else {
                $('.iconsfive').removeClass('fixed');
            }
            if (st > elementOffset4 - 660) {
                $('.iconsfive').removeClass('fixed');
            }
        }
        if (window.matchMedia("(max-width: 767px)").matches) {
            if (st >= elementOffset - 760) {
                $('.iconsfirst').removeClass('fixed');
            }
            else {
                $('.iconsfirst').addClass('fixed');
            }

            if (scrollTop > 830) {
                $('.iconssecond').addClass('fixed');
            }
            else {
                $('.iconssecond').removeClass('fixed');
            }
            if (st > elementOffset1 - 760) {
                $('.iconssecond').removeClass('fixed');
            }

            if (scrollTop > 1700) {
                $('.iconsthree').addClass('fixed');
            }
            else {
                $('.iconsthree').removeClass('fixed');
            }
            if (st > elementOffset2 - 760) {
                $('.iconsthree').removeClass('fixed');
            }

            if (scrollTop > 2570) {
                $('.iconsfour').addClass('fixed');
            }
            else {
                $('.iconsfour').removeClass('fixed');
            }
            if (st > elementOffset3 - 760) {
                $('.iconsfour').removeClass('fixed');
            }

            if (scrollTop > 3440) {
                $('.iconsfive').addClass('fixed');
            }
            else {
                $('.iconsfive').removeClass('fixed');
            }
            if (st > elementOffset4 - 760) {
                $('.iconsfive').removeClass('fixed');
            }
        }
       

       

      


      


      

      
    });

    if ($("body").hasClass("blog")) {
        $("main").addClass("container");
    }

    if ($("body").hasClass("single-post")) {
        $("main").addClass("container");
    }
});



  
    function popupCenter(url, title, w, h) {
        var left = (screen.width / 2) - (w / 2);
        var top = (screen.height / 2) - (h / 2);
        return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    }
