$(document).ready(function(){
    //nav
    function changeNav(){
        var bodyScroll = $(window).scrollTop();
        if (bodyScroll > 130) {
            if ($(window).width() > 960) {
                $('.nav__icon-image').attr('src','img/logo-black.png');    
            }
            $('.nav').css({
                'background-color': "white",
                'box-shadow': '0 1px 8px 3px rgba(0, 0, 0, 0.5)'
            });
            $('.nav__link').css('color', 'black');

        } else {
            $('.nav__icon-image').attr('src','img/logo-white.png');
            $('.nav').css({
                'background-color': "transparent",
                'box-shadow': 'none'
            });
            $('.nav__link').css('color', 'white');
        }
    };
    $(window).on("load scroll", changeNav); 
    
    

    $('.nav__link').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.nav__btn').click(function(){
        $(this).addClass('responsive-btn');
        $('.nav').addClass('responsive');
    });
    $('.nav__closebtn').click(function(){
        $('.nav').removeClass('responsive');
        $('.nav__btn').removeClass('responsive-btn');
    });  
    
    //nav active class on scroll
    var sectionIds = $('a.nav__link');
  
    $(document).scroll(function(){
        sectionIds.each(function(){

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
    
            if(scrollPosition < containerBottom - 120 && scrollPosition >= containerOffset - 120){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }
    
    
        });
    });
    //works btns
    $(".works-btns__item").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    //works gallery
    $(".works__overlay").hover(
        function(){
            $(this).find(".works__top-overlay, .works__bottom-overlay").css('width', '100%');
            $(this).find(".works__image-title, .works__image-subtitle").css('color', 'white');
            $(this).find(".works__image-title").addClass("hovered-title");
            $(this).find(".works__image-subtitle").addClass("hovered-subtitle");
        },function(){
            $(this).find(".works__top-overlay, .works__bottom-overlay").css('width', '0%');
            $(this).find(".works__image-title, .works__image-subtitle").css('color', 'transparent');
            $(this).find(".works__image-title").removeClass("hovered-title");
            $(this).find(".works__image-subtitle").removeClass("hovered-subtitle");
        }
    );
    //gallery filtering
    $(".works-btns__item").on("click",function(){
        var filter = $(this).attr("data-filter");

        if (filter == "all") {
            $(".works__image-container").removeClass("hidden");
        } else {
            $(".works__image-container").addClass("hidden");
            $( '.works__image-container[data-filter=' + filter + ']' ).removeClass( 'hidden' );
        }


    });

    //slider
    
    $('.slider__btn').click(function(){
        $(this).addClass('active-btn').siblings().removeClass('active-btn');

        var btnIndex = $(this).index();
        var itemIndex = '';

        $('.slider__item').each(function(index){
            itemIndex = index;
            if (btnIndex == itemIndex) {
                $(this).addClass('active').siblings().removeClass('active');
            }
        });
    }); 

   
});