jQuery(function($) {

    $(document).ready(function(){

        "use strict";

        pageLoad();

        /** Page Load */

        function pageLoad() {

            $(window).on('load', function(){

                $('main').waitForImages(function() {
                    $('.loading').delay(100).fadeOut('slow');
                });

                // All Pages
                checkPage();
                responsiveMenu();
                pageMap();
                animate_button();
                mouse_move();

                // Index Pages
                checkCarousel();
                
                // Work Pages
                teamSlider();
                workPage();
                workAjaxLoad();
                linkLoad();
                

            });

        }

        var linkBlock;

        /** MOBILE CHECK */
        /**********************************/
        var isMobile = false; //initiate as false
        
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
            isMobile = true;
        }
        /**********************************/


        /** MENU EFFECT */
        /**********************************/
        function responsiveMenu() {
            $(".header-menu-view ul li").on('click', function(e){

                if($(this).has("ul").length > 0) {
                    $(this).find("ul").slideToggle();
                }
            });

            $(".header-menu-icon").on("click", function() {

                if($(this).hasClass('open')) {
                    TweenMax.to('.header-menu-view', 0.5, { css:{opacity:0, display:'none'}, ease:Quad.easeInOut });
                    $(this).toggleClass('open');
                } else {
                    TweenMax.to('.header-menu-view', 0.5, {css: {opacity:1, display:'block'}, ease:Quad.easeInOut });
                    $(this).toggleClass('open');
                }

            });

            $(".header-menu-view a").on("click", function() {
                if($('.header-menu-icon').hasClass('open')) {
                    TweenMax.to('.header-menu-view', 0.2, { css:{opacity:0, display:'none'}, ease:Quad.easeInOut });
                    $('.header-menu-icon').toggleClass('open');
                }
            });
        }
        /**********************************/

        
        /** WORK PARALLAX */
        /**********************************/
        function parallaxImage() {
            var scene = document.getElementById('top-image');
            var parallax = new Parallax(scene, {
                selector: '.parallax-layer'
            });

            TweenMax.to($(".top-image-wrapper"), .8, {force3D:true, scale:1.05 , opacity:1, delay:0, ease:Power2.easeOut});
        }
        /**********************************/



        /** WORK PAGE DETECT */
        /**********************************/
        function workPage() {

            var pageStatus = $("main").data("page");

            if(pageStatus == "work-page") {
                parallaxImage();
                TweenMax.to($('.top-work-category p'), .8, { css:{top:"0vh", opacity: 1}, ease:Quad.easeInOut });
                TweenMax.to($('.top-work-name h1'), .8, { css:{top:"0vh", opacity: 1}, ease:Quad.easeInOut });
                TweenMax.to($('.top-content-scroll'), .8, { css:{opacity: 1}, ease:Quad.easeInOut });

                $('.work-popup').magnificPopup({
                    type: 'image',
                    gallery:{
                        enabled:true
                    },
                    removalDelay: 300,
                    zoom: {
                        enabled: true, 
    
                        duration: 300, 
                        easing: 'ease-in-out', 
                        opener: function(openerElement) {
                            return openerElement.is('img') ? openerElement : openerElement.find('img');
                        }
                    }
                });
            }

        }
        /**********************************/



        /** WORK AJAX LOAD */
        /**********************************/
        function workAjaxLoad() {
            TweenMax.to($('.top-work-category p'), .8, { css:{top:"0vh", opacity: 1}, ease:Quad.easeInOut });
            TweenMax.to($('.top-work-name h1'), .8, { css:{top:"0vh", opacity: 1}, ease:Quad.easeInOut });
            TweenMax.to($('.top-content-scroll'), .8, { css:{opacity: 1}, ease:Quad.easeInOut });

            $('.work-popup').magnificPopup({
                type: 'image',
                gallery:{
                    enabled:true
                },
                removalDelay: 300,
                zoom: {
                    enabled: true, 

                    duration: 300, 
                    easing: 'ease-in-out', 
                    opener: function(openerElement) {
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });

        }
        /**********************************/



        /** CHECK PAGE CONTENT SCROLL */
        /**********************************/
        function checkPage() {

            var page = $('#scroll-content').data('page');

            if(page == "scroll-content") {
                headerSticky();
            }

        }
        /**********************************/



        /** STICKY HEADER */ 
        /**********************************/
        function headerSticky() {
            
            var Scrollbar = window.Scrollbar;
            var Scroll = Scrollbar.init(document.querySelector('.scroll-content'));

            Scroll.addListener((s) => {

                var scrollTop = s.offset.y;

                if(scrollTop > 10) {
                    $("header").addClass("header-sticky shadow");
                } else {
                    $("header").removeClass("header-sticky shadow");
                }

                $('.top-image-wrapper').css({
                    opacity: function() {
                    var elementHeight = $(this).height(),
                        opacity = (((elementHeight - scrollTop) / elementHeight) * 0.8) + 0.2;
                        
                    return opacity;
                    }
                });

            });
        }
        /**********************************/



        /** CHECK SLIDER */
        /**********************************/
        function checkCarousel() {
            if($('.swiper-container').length > 0) {
                
                if($('.swiper-container').hasClass('full-carousel')) {
                    sliderImages();
                    fullCarousel();
                } else if($('.swiper-container').hasClass('small-carousel')) {
                    sliderImages();
                    smallCarousel();
                } else if($('.swiper-container').hasClass('hover-carousel')) {
                    sliderImages();
                    hoverCarousel();
                } else if($('.swiper-container').hasClass('cover-carousel')) {
                    sliderImages();
                    coverCarousel();
                }

            }
        }
        /**********************************/



        /** SLIDER IMAGES */
        /**********************************/
        function sliderImages() {

            $('.swiper-container .swiper-slide .swiper-slide-image').each(function() {
                var Image = $(this).find('img').attr('src');

                $(this).css('background-image', 'url(' +Image+ ')');
                $(this).html('');

            });
        }
        /**********************************/

          /** FULL CAROUSEL */
        /**********************************/
        function fullCarousel() {
            var interleaveOffset = 0;

            var swiperOptions = {
                mousewheel: true,
                direction: 'horizontal',
                loop: true,
                speed: 1500,
                grabCursor: false,
                parallax:true,
                mousewheelSensitivity: 0,
                mousewheelReleaseOnEdges: true, 
                watchSlidesProgress: true,
                navigation: {
                    nextEl: ".swiper-next",
                    prevEl: ".swiper-prev"
                },
                

            var swiper = new Swiper(".swiper-container", swiperOptions);
        }
        /**********************************/



        /** TEAM SLIDER */
        /**********************************/
        function teamSlider() {
            var swiper = new Swiper('.page-team', {
                slidesPerView: 3,
                spaceBetween: 15,
                pagination: {
                    el: '.team-pagination',
                    dynamicBullets: true,
                    clickable: true,
                },

                navigation: {
                    nextEl: '.team-button-next',
                    prevEl: '.team-button-prev',
                },
                breakpoints: {
                    1000: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    }, 
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    }
                }
              });
        }
        /**********************************/



        /** CURSOR MOVE */
        /**********************************/
        function cursorDot() {
            var cursor = document.getElementById('cursor');


            document.addEventListener('mousemove',
                function(e) {

                    var x = e.clientX;
                    var y = e.clientY;
                    var scrollTop = $(window).scrollTop();


                    cursor.style.left = x + "px";
                    cursor.style.top = scrollTop + y + "px";

                });


                if(isMobile != true) {
                    $('.swiper-slide a').hover(
                        function() {
                            $("#cursor").addClass('cursor-link'); },
    
                            function() { $("#cursor").removeClass('cursor-link'); }
                    );
    
                    $('.work-popup').hover(
                        function() {
                            $("#cursor").addClass('cursor-link'); },
    
                            function() { $("#cursor").removeClass('cursor-link'); }
                    );
    
                    $('.projects-item').hover(
                        function() {
                            $("#cursor").addClass('cursor-link'); },
    
                            function() { $("#cursor").removeClass('cursor-link'); }
                    );
                }
                
        }


        function animate_button() {

            var mouse = { x: 0, y: 0 };
            var pos = { x: 0, y: 0 };
            var ratio = 0.15;
            var active = false;
            var ball = document.getElementById("ball");
            
            TweenLite.set(ball, { xPercent: -50, yPercent: -50 });
            
            document.addEventListener("mousemove", mouseMove);
            
            function mouseMove(e) {
              mouse.x = e.clientX;
              mouse.y = e.clientY;
            }
            
            TweenLite.ticker.addEventListener("tick", updatePosition);
            
            function updatePosition() {
              if (!active) {
                pos.x += (mouse.x - pos.x) * ratio;
                pos.y += (mouse.y - pos.y) * ratio;
                TweenLite.set(ball, { x: pos.x, y: pos.y });
              }
            }
            
            $(".icon-wrap").mouseenter(function(e) {
              TweenMax.to(this, 0.3, { scale: 1.01 });
              $(ball).addClass('big');
              active = true;
            });
            
            $(".icon-wrap").mouseleave(function(e) {
              TweenMax.to(this, 0.3, { scale: 1 });
              $(ball).removeClass('big');
              TweenMax.to(this.querySelector(".button-icon"), 0.3, { x: 0, y: 0 });
              active = false;
            });
            
            $(".icon-wrap").mousemove(function(e) {
              parallaxCursor(e, this, 3);
              callParallax(e, this);
            });
            
            function callParallax(e, parent) {
              parallaxIt(e, parent, parent.querySelector(".button-icon"), 10);
            }
            
            function parallaxIt(e, parent, target, movement) {
              var boundingRect = parent.getBoundingClientRect();
              var relX = e.clientX - boundingRect.left;
              var relY = e.clientY - boundingRect.top;
            
              TweenMax.to(target, 0.3, {
                x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
                y: (relY - boundingRect.height / 2) / boundingRect.height * movement,
                ease: Power2.easeOut
              });
            }
            
            function parallaxCursor(e, parent, movement) {
              var rect = parent.getBoundingClientRect();
              var relX = e.clientX - rect.left;
              var relY = e.clientY - rect.top;
              pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
              pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
              TweenMax.to(ball, 0.3, { x: pos.x, y: pos.y });
            }
    }

    // LOADER CURSOR
    function mouse_move() { 
        // Sliders
        $(".swiper-slide a, .page-projects a, .next-work a").on("mouseenter", function() {
            $('#ball').addClass("plus");
        });
        $(".swiper-slide a, .page-projects a, .next-work a").on("mouseleave", function() {
            $('#ball').removeClass("plus");
        });
        // Social
        $(".swiper-social a, .footer-social a").on("mouseenter", function() {
            $('#ball').addClass("big");
        });
        $(".swiper-social a, .footer-social a").on("mouseleave", function() {
            $('#ball').removeClass("big");
        });
        // Arrow
        $(".swiper-number ul li, .header-logo").on("mouseenter", function() {
            $('#ball').addClass("big");
        });
        $(".swiper-number ul li, .header-logo").on("mouseleave", function() {
            $('#ball').removeClass("big");
        });
        // Menu
        $(".header-menu-view a").on("mouseenter", function() {
            $('#ball').addClass("big");
        });
        $(".header-menu-view a").on("mouseleave", function() {
            $('#ball').removeClass("big");
        });
        // Image
        $(".single-image a").on("mouseenter", function() {
            $('#ball').addClass("plus");
        });
        $(".single-image a").on("mouseleave", function() {
            $('#ball').removeClass("plus");
        });
        $(".multi-column a").on("mouseenter", function() {
            $('#ball').addClass("plus");
        });
        $(".multi-column a").on("mouseleave", function() {
            $('#ball').removeClass("plus");
        });
    }
        /**********************************/


        /** MAP */
        /**********************************/
        function pageMap() {

            var mapId = document.getElementById('map');
            
            if(mapId) {
                var mapOptions = {
                    zoom: 11,
                    disableDefaultUI: true,
                    scrollwheel: false,

                    center: new google.maps.LatLng(40.6700, -73.9400), 
                        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
                    };

                    var mapElement = document.getElementById('map');
                    
                    var map = new google.maps.Map(mapElement, mapOptions);

                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(40.6700, -73.9400),
                        map: map,
                        title: 'Snazzy!'
                });
            }
        }
        
       
        /** WORK & PAGE LOAD */
        /**********************************/
        function linkLoad() {
            $("a").on('click', function(e) {

                var linkStatus = $(this).data('type');
                var linkHref = $(this).attr('href');
                linkBlock = $(this).data('block');
    
                switch (linkStatus) {
                    case "ajax-load":
                        workLinkLoad();
                        break;
                    case "page-load":
                        pageLinkLoad();
                        break;
                    case "direct-link":
                        window.open(linkHref,'_blank');
                        break;
                    default:
                }
    
    
                function pageLinkLoad() {
    
                    TweenMax.to($('.page-loading'), .5, {css:{display:'block', opacity:1, top:"0%"}, onComplete:loadCursor, ease:Quad.easeInOut });
    
                    function loadCursor() {
                        $('#cursor').addClass('cursor-go');
                        $("header").removeClass("header-sticky shadow");
                        loadPage();    
                    }
    
                    function loadPage() {
                        setTimeout(function() {
                            loadPageContent(linkHref);            
                            history.pushState('', 'new URL: '+linkHref, linkHref);            
                        }, 1000);
                    }
                }
    
    
                function workLinkLoad() {
                    TweenMax.to($('.sub-loading'), .5, {css:{display:'block', opacity:1}, onComplete:loadCursor, ease:Quad.easeInOut });
                    TweenMax.to($('.swiper-slide-content p'), .5, { css:{top:"500px", opacity: 0}, ease:Quad.easeInOut });
                    TweenMax.to($('.swiper-slide-content h1'), .5, { css:{top:"500px", opacity: 0}, ease:Quad.easeInOut });
    
                    function loadCursor() {
                        $('#cursor').addClass('cursor-go');
                        $("header").removeClass("header-sticky shadow");
                        loadWork();    
                    }
    
                    function loadWork() {
                        setTimeout(function() {
                            loadWorkContent(linkHref);            
                            history.pushState('', 'new URL: '+linkHref, linkHref);            
                        }, 1000);
                    }
                }
                
                e.preventDefault();
    
            });
    
    
            function loadWorkContent(url) {
    
                var getData = $.get(url, function(response) {
    
                    var markup = $("<main>" + response + "</main>");
                    var fragment = markup.find("main").html();
    
                    var title = markup.find("title").html();
                    $('head title').html( title );
    
                    $("main").html(fragment);
    
                    TweenMax.to($('.sub-loading'), .5, {css:{display:'none', opacity:0}, ease:Quad.easeInOut });
                    $('#cursor').removeClass('cursor-go');
    
    
                    checkPage();
                    checkCarousel();
                    animate_button();
                    mouse_move();
                    teamSlider();
                    workAjaxLoad();
                    parallaxImage();
                    linkLoad();
    
                });
            }
    
    
            function loadPageContent(url) {
    
                var getData = $.get(url, function(response) {
    
                    var markup = $("<main>" + response + "</main>");
                    var fragment = markup.find("main").html();
    
                    var title = markup.find("title").html();
                    $('head title').html( title );
    
                    $("main").html(fragment);
    
                    TweenMax.to($('.page-loading'), .5, {css:{display:'none', opacity:0, top:"100%"}, ease:Quad.easeInOut });
                    $('#cursor').removeClass('cursor-go');
    
    
                    checkPage();
                    checkCarousel();
                    animate_button();
                    mouse_move();
                    teamSlider();
                    workAjaxLoad();
                    linkLoad();
                    pageMap();

                    if(linkBlock == "all") {
                        parallaxImage();
                        linkBlock = "";
                    }
    
                });
            }
    
            window.onpopstate = function(event) {
    
                var pathName = location.pathname.split("/").pop();
                loadPageContent(pathName);
    
            };

        }
        
        /**********************************/

    });

});
