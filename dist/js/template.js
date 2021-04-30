/*
	1.  InitTabServices
	2.  InitTab
	3.  InitSlick
	4.  InitSearch
	5.  InitWehicels
	6.  InitParallax
	7.  InitMenuLeft
	8.  InitMegaMenu
	9.  InitClickonmenu
	10. InitCalendar
	11. InitTime
	12. InitScrollTop
	13. InitAddress
	14. InitDateTimePickup
	15. InitPost_mansory
	16. InitWaveButton
    17. InitSlide_services
    18. InitGoogleMap
    19. InitAccordionToggle
    20. InitWaveButton
    21. InitSlide_services
    22. InitGoogleMap
    23. InitAccordionToggle
    24. InitTabs
    25. InitTabLogin
	26. InitProgressBar
	27. InitProgressCircle
	28. InitDetectViewport
	29. InitOpenSummary
	30. InitPreload
	31. InitSelect
	32. InitDatePicker
	33. InitDateTimePicker
 */


(function($) {
	"use strict";
	// Check is mobile
	var isMobile = function() {
	 	return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
	}
	// Init Slider
	var initCarousel = function(_class){
		var _get_class = $(_class);
		if(_get_class.length === 0) return;
		_get_class.each(function() {
			if ( $().owlCarousel ){
				$(this).find('.fleet-carousel .owl-carousel').owlCarousel({
					margin:30,
					smartSpeed:700,
					autoplayHoverPause:true,
					navText:['<i class="ion-ios-arrow-thin-left"></i>', '<i class="ion-ios-arrow-thin-right"></i>'],
					dots:true,
					responsiveClass:true,
					responsive:{
						0:{
							items:1,
						},
						768:{
							items: 2,
						},
						992:{
							items: 2,
						},
						1200:{
							items:$(this).find('.fleet-carousel').data('columns'),
							nav:true,
						}
					}
				});
			}
		});
	};
	var initCarousels = function(_class){
		var _get_class = $(_class);
		if(_get_class.length === 0) return;
		_get_class.each(function() {
			if ( $().owlCarousel ){
				$(this).find('.fleet-carousel .owl-carousel').owlCarousel({
					loop:true,
					autoplay:true,
					autoplayTimeout:3000,
					margin:50,
					smartSpeed:700,
					autoplayHoverPause:true,
					navText:['<i class="ion-ios-arrow-thin-left"></i>', '<i class="ion-ios-arrow-thin-right"></i>'],
					dots:false,
					responsiveClass:true,
					responsive:{
						0:{
							items:1,
						},
						768:{
							items: 2,
						},
						992:{
							items: 3,
						},
						1200:{
							items: 5,
						},
						1500:{
							items:$(this).find('.fleet-carousel').data('columns'),
							nav:true,
						},
					}
				});
			}
		});
	};
	// Tab Services
	var initTabServices = function(_newclass,_newcontent){
		var _gettab = $(_newclass);
		var _content_tab = $(_newcontent);
		if(_gettab.length === 0) return;
		_gettab.on('click','li a',function(event) {
			event.preventDefault();
			$(this).parent().addClass("active");
			$(this).parent().siblings().removeClass("active");
			var tab = $(this).attr("href");
			_content_tab.not(tab).css("display", "none");
			$(tab).fadeIn();
		});
	};
	// Tab fleet slider
	var initTab = function(){
		var get_class = $('.tab_menu');
		if(get_class.length === 0) return;
		if( !(get_class.hasClass('tab-head-container'))) get_class.addClass('tab-container');
		var _curent_tab = get_class.find('.current').find('a').attr('href');
		get_class.parent().find(_curent_tab).removeClass('inactive').addClass('active');
		get_class.each(function(){
		   $(this).on('click','a',function(event) {
			event.preventDefault();
			$(this).parent().addClass("current");
			$(this).parent().siblings().removeClass("current");
			var tab = $(this).attr("href");
			var _sb = "#";
			$('.block-fleet .fleet-carousel').each(function(){
				 var _id = _sb+$(this).attr("id");
				 if(_id == tab){
				  $(this).addClass('active');
				 }
				 else{
				  $(this).removeClass('active');
				 }
			});
			$(".block-fleet .fleet-carousel").not(tab).css("display", "none");
			$(tab).fadeIn();
		   });
		});
	};
	// Slick slider
	var initSlick = function(){
		if($().slick){
			$('.block-fleet .center').slick({
			  centerMode: true,
			  centerPadding: '0',
			  slidesToShow:3,
			  slidesToScroll: 1,
			  autoplay: true,
 			  autoplaySpeed: 5000,
 			  dots: true,
			  responsive: [
				{
				  breakpoint: 1600,
				  settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0',
					slidesToShow:2,
					slidesToScroll: 1,
				  }
				},
				{
				  breakpoint:992,
				  settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0',
					slidesToShow:1,
					slidesToScroll: 1,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				  }
				}
			  ]
			});
			// $('.block-fleet .center').on('click', '.fleet-item', function (e) {
			// 	e.stopPropagation();
			// 	var index = $(this).data("slick-index");
			// 	if ($('.block-fleet .center').slick('slickCurrentSlide') !== index) {
			// 	  $('.block-fleet .center').slick('slickGoTo', index);
			// 	}
			// });
		}
	};
	// Search
	var initSearch = function (){
        var _a1 = $('.view_search');
        var _close = $('.close-fixed');
		_a1.on('click',function(e){
			e.stopPropagation();
			$('.form-search').toggleClass('active');
		});
		$('.form-search').on('click',function(e){
			e.stopPropagation();
		});
		_close.on('click', function(){
			$('.form-search').removeClass('active');
		})
		$('body').on('click',function(){
			$('.form-search').removeClass('active');
		});
    }
	// Wehicels
	var initWehicels = function(){
		var _wehi = $('.info-contact .vehicle');
		var _navwe = $('.wehicles');
		_wehi.on('click',function(e){
			e.stopPropagation();
			$(this).toggleClass('active');
			_navwe.toggleClass('active');
		});
		$('.wehicles .fleet-carousel').on('click',function(e){
			e.stopPropagation();
		});
		$('body').on('click',function(){
			_wehi.removeClass('active');
			_navwe.removeClass('active');
		})
	}
	// Parallax
	var initParallax = function(){
		if ($().parallax) {
			$('.parallax').parallax("50%", -0.6);
		}
	};
	// Menu Left
	var initMenuLeft = function(_classo){
		var _open = $('.onclick');
		var _active = $(_classo);
		var _wrap = $('.navigation');
		var _close = $('.close_x');
		_open.on('click',function(e){
			e.stopPropagation();
			_wrap.addClass('active');
			_active.addClass('active');
		});
		_active.on('click',function(e){
			e.stopPropagation();
		});
		_close.on('click',function(e){
			_wrap.removeClass('active');
			_active.removeClass('active');
		});
		$('body').on('click',function(e){
			_wrap.removeClass('active');
			_active.removeClass('active');
		});
	};
	// Mega Menu
	var initMegaMenu = function(){
		var _lmn = $('.main-menu .has-dropdown > span');
		var _nm = $('.main-menu .has-dropdown > a');
		_lmn.on('click',function(){
			$(this).toggleClass('active');
			$(this).next('ul.menu-dropdown').slideToggle();
		});
		$(window).on('load resize', function(){
			if(matchMedia( 'only screen and (max-width: 991px)' ).matches){
				_nm.on('click',function(e){
					e.preventDefault();
					$(this).toggleClass('active');
					$(this).next('ul').slideToggle();
				})
			}
		});
	};
	// Click Menu
	var initClickonmenu = function(){
		var _mobile = $('.mobile-menu');
		var _mainav = $('.main-menu');
		_mobile.on('click',function(e){
			e.stopPropagation();
			$(this).toggleClass('active');
			_mainav.toggleClass('active');
		});
		_mainav.on('click',function(e){
			e.stopPropagation();
		});
		$('.top-text i').on('click',function(){
			_mobile.removeClass('active');
			_mainav.removeClass('active');
		});
		$('body').on('click',function(){
			_mobile.removeClass('active');
			_mainav.removeClass('active');
		})
	}
	// Calendar
	var initCalendar = function(){
		var _open1 = $('#date-range10');
		var _open2 = $('#date-range11');
		var _open3 = $('#date-range12');
		var _close = $('.calendar .close');
		_open1.on('click', function(){
			$('.calendar').addClass('open');
			$('#date-range10-container').show();
			$( 'body,html' ).animate({
				scrollTop: 0
			}, 500);
			return false;
		});
		_open2.on('click', function(){
			$('.calendar').addClass('open');
			$('#date-range11-container').show();
			$( 'body,html' ).animate({
				scrollTop: 0
			}, 500);
			return false;
		});
		_open3.on('click', function(){
			$('.calendar').addClass('open');
			$('#date-range12-container').show();
				$( 'body,html' ).animate({
					scrollTop: 0
				}, 500);
				return false;
		});
		
		_close.on('click', function() {
			$('.calendar').removeClass('open');
			$('#date-range10-container').hide();
			$('#date-range11-container').hide();
			$('#date-range12-container').hide();
		})
	}
	// Time
	var initTime = function(){
		var _open = $('.pick-time.js');
		var _close = $('.time-open .close');
		var _box_hour = $('.box-select');
		_open.on('click', function(){
			$('.time-open').addClass('open');
			$( 'body,html' ).animate({
				scrollTop: 0
			}, 500);
			return false;
		});
		_close.on('click', function() {
			$('.time-open').removeClass('open');
		})
	}
	// Scroll Top
	var initScrollTop = function(){
		var el = $('.scroll-top');
		el.hide();
		$( window ).on('scroll', function() {
			if( $( this ).scrollTop() > $( window ).height() + 600 ) {
				el.show();
			} else {
				el.hide();
			}
		});
		el.on('click', function() {
			$( 'body,html' ).animate({
				scrollTop: 0
			}, 500);
			return false;
		});
    };
    // Address
	var initAddress = function(){
		var _open = $('.pick-address.js');
		var _open2 = $('.pick-dropday.js')
		var _close = $('.book-adress .close');
		var _add = $('.pic-add');
		_open.on('click', function(){
			$('.book-adress').addClass('open');
			$( 'body,html' ).animate({
				scrollTop: 0
			}, 500);
			return false;
		});
		_open2.on('click', function(){
			$('.book-adress').addClass('open');
			$( 'body,html' ).animate({
				scrollTop: 0
			}, 500);
			return false;
		});
		_close.on('click', function() {
			$('.book-adress').removeClass('open');
		})
		_add.on('click',function(){
			$('.list-address').toggleClass('active');
		})
	}
	// DateTime Pickup
	var initDateTimePickup = function(){
		if($().yacal){
			$('#calendarTemplate').yacal({
				tpl: { 
					weekday: '<strong class="wday wd#weekday#">#weekdayName#<\/strong>'
				}
			});

			// Spanish version
			$('#calendario').yacal({
				tpl: { 
					weekday: '<strong class="wday wd#weekday#">#weekdayName#<\/strong>'
				}
			});
		}
	};
	// Post Mansory
	var initPost_mansory = function() { 
        if ( $().isotope ) {           
            var $container = $('.post-grid');
            var selector = $(this).attr('data-filter');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.ipsotope',
                    transitionDuration: '1s'
                });
                 $container.isotope({ filter: '*' })
            });
            $('.tab-post li').on('click',function() {                           
                var selector = $(this).attr('data-filter');
                $('.tab-post li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });            
        };
    };
    // Wave Button
    var initWaveButton = function () {
        Waves.attach('.button', ['waves-button', 'waves-float']);
        Waves.init();
    };
    // Slide Services 
    var initSlide_services = function() {
        $(".owl-carousel").owlCarousel({
            autoplay:true,
            dots:true,
            margin:0,
            loop:true,
            items:1
        });
    };
    // Google Map
    var initGoogleMap = function() {
        if ( $().gmap3 ) {  
            $(".map").gmap3({
                map:{
                    options:{
                        center:[32.301023, -90.193353],
                        zoom: 11,
                        mapTypeId: 'creative',
                        mapTypeControlOptions: {
                            mapTypeIds: ['creative', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                        },
                        scrollwheel: false,
                        navigationControl: true,
                        streetViewControl: true
                    }
                },
                getlatlng:{
                    address:  $('.contact-maps').data('address'),
                    callback: function(results) {
                        if ( !results ) return;
                        $(this).gmap3('get').setCenter(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
                        $(this).gmap3({
                            marker:{
                                latLng:results[0].geometry.location,
                                options:{
                                    icon: $('.contact-maps').data('images')
                                }
                            }
                        });
                    }
                },
                styledmaptype:{
                    id: "creative",
                    options:{
                        name: "CreativeLayers Map"
                    },
                    styles:[
                        {
                            "featureType": "administrative",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#6195a0"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.province",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "lightness": "0"
                                },
                                {
                                    "saturation": "0"
                                },
                                {
                                    "color": "#f5f5f2"
                                },
                                {
                                    "gamma": "1"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "lightness": "-3"
                                },
                                {
                                    "gamma": "1.00"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "saturation": "16"
                                },
                                {
                                    "color": "#ff0000"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural.terrain",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural.terrain",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#ff0000"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.attraction",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#ff0000"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#bae5ce"
                                },
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "saturation": -100
                                },
                                {
                                    "lightness": 45
                                },
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#f6954d"
                                },
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text",
                            "stylers": [
                                {
                                    "color": "#4e4e4e"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#787878"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#3a1616"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station.airport",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "hue": "#0a00ff"
                                },
                                {
                                    "saturation": "-77"
                                },
                                {
                                    "gamma": "0.57"
                                },
                                {
                                    "lightness": "0"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station.rail",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#43321e"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station.rail",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "hue": "#ff6c00"
                                },
                                {
                                    "lightness": "4"
                                },
                                {
                                    "gamma": "0.75"
                                },
                                {
                                    "saturation": "-68"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "color": "#eaf6f8"
                                },
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#a4c4c8"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#433333"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "lightness": "-49"
                                },
                                {
                                    "saturation": "-53"
                                },
                                {
                                    "gamma": "0.79"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#995c5c"
                                }
                            ]
                        }
                    ]
                },  
            });
        }
        $('.map').css( 'height', $('.contact-maps').data('height') );
    };
    // Accordion Toggle
    var initAccordionToggle = function() {
        var _speed = {duration: 400};
        $('.toggle-content').hide();
        $('.accordion-toggle .toggle-title.active').siblings('.toggle-content').show();
        $('.accordion').find('.toggle-title').on('click', function() {
            $(this).toggleClass('active');
            $(this).next().slideToggle(_speed);
            $(".toggle-content").not($(this).next()).slideUp(_speed);
            if ($(this).is('.active')) {
                $(this).closest('.accordion').find('.toggle-title.active').toggleClass('active')
                $(this).toggleClass('active');
            };
        });
    };
    // Tabs
    var initTabs = function() {
        $('.box-tabs.border-3').each(function() {
		    $(this).find('.content-tab').children(".inner-box-tab").hide();
		    $(this).find('.content-tab').children(".inner-box-tab:first").show();
		    $(this).children("ul.tab-list").children('li').on('click', function() {
		        $('.box-tabs.border-3 ul.tab-list li').removeClass("active");
		        $(this).addClass("active");
		        $(this).closest('.box-tabs.border-3').children('.content-tab').children(".inner-box-tab").hide();
		        var activeTab = $(this).attr("rel");
		        $("#"+activeTab).fadeIn("fast");
		    });
	    });
	    $('.box-tabs.border-2').each(function() {
		    $(this).find('.content-tab').children(".inner-box-tab").hide();
		    $(this).find('.content-tab').children(".inner-box-tab:first").show();
		    $(this).children("ul.tab-list").children('li').on('click', function() {
		        $('.box-tabs.border-2 ul.tab-list li').removeClass("active");
		        $(this).addClass("active");
		        $(this).closest('.box-tabs.border-2').children('.content-tab').children(".inner-box-tab").hide();
		        var activeTab = $(this).attr("rel");
		        $("#"+activeTab).fadeIn("fast");
		    });
	    });
	    $('.box-tabs.border-1').each(function() {
		    $(this).find('.content-tab').children(".inner-box-tab").hide();
		    $(this).find('.content-tab').children(".inner-box-tab:first").show();
		    $(this).children("ul.tab-list").children('li').on('click', function() {
		        $('.box-tabs.border-1 ul.tab-list li').removeClass("active");
		        $(this).addClass("active");
		        $(this).closest('.box-tabs.border-1').children('.content-tab').children(".inner-box-tab").hide();
		        var activeTab = $(this).attr("rel");
		        $("#"+activeTab).fadeIn("fast");
		    });
	    });
    };
    // Tab Login
    var initTabLogin = function() {
        $('.login-booking').each(function() {
		    $(this).find('.login-content').children(".content-tab").hide();
		    $(this).find('.login-content').children(".content-tab:first").show();
		    $(this).children("ul.login-tab-list").children('li').on('click', function() {
		        $('.login-booking ul.login-tab-list li').removeClass("active");
		        $(this).addClass("active");
		        $(this).closest('.login-booking').children('.login-content').children(".content-tab").hide();
		        var activeTab = $(this).attr("rel");
		        $("#"+activeTab).fadeIn("fast");
		    });
	    });
    };
    // Progress Bar
    var initProgressBar = function() {        
        $('.progress-bar').on('on-appear', function() {
            $(this).each(function() {
                $(this).css("overflow", "inherit");
                var _percent = $(this).data('percent');                
                $(this).find('.progress-animate').animate({
                    "overflow":"inherit",
                    "width": _percent + '%'
                }, $(this).find('.progress-animate').data('duration') );
                $(this).parent('.progress-item').find('.perc').addClass('show').animate({
                    "overflow":"inherit",
                    "width": _percent + '%'
                }, $(this).find('.progress-animate').data('duration') );
            });
        });
    };
    // Progress Circle
    var initProgressCircle = function() {
        $('.progress-circle').waypoint(function() {
            $('.demo').percentcircle({
                coverBg: '#f3f3f3',
                bgColor: '#f3f3f3',
                fillColor: '#d7d2bd'
            });
            $('.demo-1').percentcircle({
                coverBg: '#f3f3f3',
                bgColor: '#f3f3f3',
                fillColor: '#1e1e1e'
            });
            $('.demo-2').percentcircle({
                coverBg: '#f3f3f3',
                bgColor: '#f3f3f3',
                fillColor: '#be9b60'
            });
            $('.demo').children('div:not(:first-child)').css({
                display: 'none'
            });
            $('.demo-1').children('div:not(:first-child)').css({
                display: 'none'
            });
            $('.demo-2').children('div:not(:first-child)').css({
                display: 'none'
            });
        }, {offset: '100%'});
    };
    // Detect Viewport
    var initDetectViewport = function() {
        $('[data-waypoint-active="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '95%', triggerOnce: true });
         $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            }, 100);
        });
    };
    // Open Summary
    var initOpenSummary = function() {
        var _buttonSummary = $('.button-summary-bar');
        _buttonSummary.on('click',function(){
            $(this).closest('.layout-theme').children('.summary-bar-area').toggleClass('open');
            $(this).toggleClass('open');
        })
    }
    // Preload
    var initPreload = function() {
        $(window).on("load", function () {
          $(".loader").fadeOut();
          $("#loading-overlay").delay(300).fadeOut('slow',function(){
        
          }); 
      });
    };
    // Select
	var initSelect = function(){
		$('.box-time select').each(function(){
			var $this = $(this), numberOfOptions = $(this).children('option').length;
			$this.addClass('select-hidden'); 
			$this.wrap('<div class="select"></div>');
			$this.after('<div class="select-styled"></div>');
			var $styledSelect = $this.next('div.select-styled');
			$styledSelect.text($this.children('option').eq(0).text());
			var $list = $('<ul />', {
				'class': 'select-options'
			}).insertAfter($styledSelect);
			for (var i = 0; i < numberOfOptions; i++) {
				$('<li />', {
					text: $this.children('option').eq(i).text(),
					rel: $this.children('option').eq(i).val()
				}).appendTo($list);
			}
			var $listItems = $list.children('li');
			$styledSelect.on('click', function(e) {
				e.stopPropagation();
				$('div.select-styled.active').not(this).each(function(){
					$(this).removeClass('active').next('ul.select-options').hide();
				});
				$(this).toggleClass('active').next('ul.select-options').toggle();
			});
		  
			$listItems.on('click', function(e) {
				e.stopPropagation();
				$styledSelect.text($(this).text()).removeClass('active');
				$this.val($(this).attr('rel'));
				$list.hide();
			});
			$(document).on('click', function() {
				$styledSelect.removeClass('active');
				$list.hide();
			});
		});
	};

	var initDatePicker = function() {
       if ( $().dateRangePicker ) {
	       	$('#date-range12').dateRangePicker(
			{
				inline:true,
				container: '#date-range12-container', 
				// alwaysOpen:true 
			});
			$('#date-range11').dateRangePicker(
			{
				inline:true,
				container: '#date-range11-container', 
				// alwaysOpen:true 
			});
			$('#date-range10').dateRangePicker(
			{
				inline:true,
				container: '#date-range10-container', 
				// alwaysOpen:true 
			});
       };
	};

	var initDateTimePicker = function() {
		$('.form_date').datetimepicker({
	        // language:  'fr',
	        weekStart: 1,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0
	    });
		$('.form_time').datetimepicker({
	        // language:  'fr',
	        weekStart: 1,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 1,
			minView: 0,
			maxView: 1,
			forceParse: 0
	    });
	};

	/**
	 * DOMready event.
	 */
	$( document ).ready( function() {
		initTab();
		initTabServices('.sdl-booking','.schedule-booking');
		initTabServices('.tab_services','.content-box');
		initTabServices('.tab_menu','.fleet-carousels');
		initCarousel('.block-fleet');
		initCarousels('.wehicles');
		initCarousel('.blog-slider');
		initCarousel('.testimonial');
		initMenuLeft('.header-03 .main-menu');
		initMenuLeft('.header-01 .main-menu');
		initMegaMenu();
		initSlick();
		initSearch();
		initClickonmenu();
		initParallax();
		initDateTimePickup();
		initCalendar();
		initPost_mansory();
    	initWaveButton();
        initSlide_services();
        initGoogleMap();
        initAccordionToggle();
        initTabs();
        initTabLogin();
        initProgressBar();
        initProgressCircle();
        initDetectViewport();
        initOpenSummary();
		initTime();
		initAddress();
		initSelect('.box-time select');
		initScrollTop();
		initPreload();
		initWehicels();
		initDatePicker();
		initDateTimePicker();
	});
})(jQuery);