(function($){
    "use strict";
    // wow js
    new WOW().init();
    // top header
    $('.top-header-remove-btn').click(function(){
        $('.top-header').fadeOut('fast');
    });
    // navigation bar
    $('.hamburger').click(function(){
        $('#nav-links').fadeToggle('fast');
        $('.hamburger').toggleClass('toggle');
    });
    $(window).on('scroll',function(){
        if($(window).scrollTop()>50){
            $('.navigation-bar').addClass('scroll');
            $('.logo-img').attr('src','assets/img/gallery-logo-gradient.png');
        }else{
            $('.navigation-bar').removeClass('scroll');
            $('.logo-img').attr('src','assets/img/gallery-logo-dark.png');
        }
    });
    $(window).resize(function(){
        if($(window).width()<992){
            $('.navigation-bar').removeClass('sticky-top');
        }else{
            $('.navigation-bar').addClass('sticky-top');
        }
    })
    // banner video popup
    $('.video-popup').magnificPopup({type:'iframe'});
    // branding logos
    var brandingLogo=document.querySelectorAll('.branding-logo-animate');
    var branding=document.querySelectorAll('.branding-logo');
    branding.forEach(item=>{
        item.addEventListener('mouseover',function(){
            brandingLogo.forEach(span=>{
                span.classList.add('branding-logo-animate-hover')
            })
        });
        item.addEventListener('mouseout',function(){
            brandingLogo.forEach(span=>{
                span.classList.remove('branding-logo-animate-hover')
            })
        });
    })
    // gallery popup
    $('.gallery-popup').magnificPopup({
        type: 'image',
        gallery:{
          enabled:true
        }
      });
    //   counter area
    $('.counter').countUp({
        'time': 2000,
        'delay': 10
      });
    //   elementor-3d section
    VanillaTilt.init(document.querySelector(".elementor-3d-box"), {
        max: 5,
        speed: 400,
        glare:true,
        "max-glare":1,
        perspective:1000,
    }); 
        //It also supports NodeList
    VanillaTilt.init(document.querySelectorAll(".elementor-3d-box"));
    // go top
    $(window).scroll(function(){
        if($(window).scrollTop()>40){
            $('.go-top').addClass('active')
        }else{
            $('.go-top').removeClass('active')
        }
    });
    $('.go-top').click(function(){
        $('html').animate({scrollTop:0},500)
    })
})(jQuery);