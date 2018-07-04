<<<<<<< HEAD
/* =================================
------------------------------------
	Arcade - Architecture
	Version: 1.0
 ------------------------------------ 
 ====================================*/



'use strict';

var window_w = $(window).innerWidth();


$(window).on('load', function() { 
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

	__portfolio(); // call portfolio function

});


(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.nav-menu').slideToggle(400);
		event.preventDefault();
	});



	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	var hero_s = $(".hero-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOutRight',
    	animateIn: 'fadeInLeft',
        navText: ['<i class="fa fa-long-arrow-left"></i> PREV', 'NEXT<i class="fa fa-long-arrow-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        //autoplay: true,
        mouseDrag: false,
        onInitialized: function() {
        	var a = this.items().length;
        	if(a < 10){
            	$("#snh-1").html("<span>01" + " / </span>0" + a);
       		} else{
       			$("#snh-1").html("<span>01" + " / </span>" + a);
       		}
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index, a = a.item.count;
        if(a < 10){
        	$("#snh-1").html("<span>0" + ( 1 > b ? b + a : b > a ? b - a : b) + " / </span>0" + a);
    	} else{
    		$("#snh-1").html("<span> "+ (1 > b ? b + a : b > a ? b - a : b) + " / </span>" + a);
    	}
    });



	/*------------------
		Projects Slider
	--------------------*/
	var project = $('#projects-carousel').owlCarousel({
		nav: true,
		loop: true,
		margin:20,
		navText: ['<i class="fa fa-long-arrow-left"></i> PREV', 'NEXT<i class="fa fa-long-arrow-right"></i>'],
		responsive:{
			0:{
				items:1,
				margin: 0
			},
			600:{
				items:2
			},
			800:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			},
		}
	});
	/* animate filter */
	var owlAnimateFilter = function(even) {
		$(this)
		.addClass('__loading')
		.delay(70 * $(this).parent().index())
		.queue(function() {
			$(this).dequeue().removeClass('__loading')
		});
	}
	/* Projects filter */
	$('.projects-filter-nav li').on('click', function(e) {
		var filter_data = $(this).data('filter');

		/* return if current */
		if($(this).hasClass('btn-active')) return;

		/* active current */
		$(this).addClass('btn-active').siblings().removeClass('btn-active');

		/* Filter */
		project.owlFilter(filter_data, function(_owl) { 
			$(_owl).find('.single-project').each(owlAnimateFilter); 
		});
	});



	/*------------------
		Brands Slider
	--------------------*/
	$('#client-carousel').owlCarousel({
		nav: false,
		loop: true,
		margin:20,
		autoplay: true,
		responsive:{
			0:{
				items:1,
				margin: 0
			},
			600:{
				items:3
			},
			800:{
				items:4
			},
			992:{
				items:4
			},
			1200:{
				items:5
			},
		}
	});



	/*------------------
		Review Slider
	--------------------*/
	var test_s = $("#test-slider");
    test_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        autoplay: true,
        onInitialized: function() {
        	var a = this.items().length;
        	if(a < 10){
            	$("#snh-2").html("<span>01" + "/ </span>0" + a);
       		} else{
       			$("#snh-2").html("<span>01" + "/ </span>" + a);
       		}
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index, a = a.item.count;
        if(a < 10){
        	$("#snh-2").html("<span>0" + ( 1 > b ? b + a : b > a ? b - a : b) + "/ </span>0" + a);
    	} else{
    		$("#snh-2").html("<span> "+ (1 > b ? b + a : b > a ? b - a : b) + "/ </span>" + a);
    	}
    });



    /*------------------
		Service Slider
	--------------------*/
	$('.service-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
    });



	/*------------------
		Popup
	--------------------*/
	$('.img-popup').magnificPopup({
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 400,
	});


	/*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').parent('.panel-header').removeClass('active');
		var $this = $(this).parent('.panel-header');
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});



	//Set progress circle 1
	$("#progress1").circleProgress({
		value: 0.75,
		size: 195,
		thickness: 20,
		fill: "#baff00",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 2
	$("#progress2").circleProgress({
		value: 0.83,
		size: 195,
		thickness: 20,
		fill: "#baff00",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 3
	$("#progress3").circleProgress({
		value: 0.25,
		size: 195,
		thickness: 20,
		fill: "#baff00",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 4
	$("#progress4").circleProgress({
		value: 0.95,
		size: 195,
		thickness: 20,
		fill: "#baff00",
		emptyFill: "rgba(0, 0, 0, 0)"
	});

})(jQuery);


/*------------------
	Portfolio 
--------------------*/
function __portfolio(){

	portfolio_item_size();

	$(window).on('resize', function(){
		portfolio_item_size();
	});


	var $container = $('#portfolio');
	$container.isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});

	// portfolio filter nav
	$('.portfolio-filter li').on("click", function(){
		$(".portfolio-filter li").removeClass("active");
		$(this).addClass("active");				 
		var selector = $(this).attr('data-filter');
		$container.isotope({
				filter: selector,
				animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
		return false;
	});
}

/*------------------
	Portfolio grid
--------------------*/
function portfolio_item_size(){
	$('#portfolio').find('.grid-item').each(function() {
		var pi_height1 = $(this).outerWidth(true),
		pi_height2 = pi_height1/2;
		
		if($(this).hasClass('grid-long') && window_w > 991){
			$(this).css('height', pi_height2);
		}else{
			$(this).css('height', Math.abs(pi_height1));
		}
	});
}
=======
jQuery(document).ready(function () {

    var ua = navigator.userAgent.toLowerCase();
    if ((ua.indexOf("safari/") !== -1 && ua.indexOf("windows") !== -1 && ua.indexOf("chrom") === -1) || is_touch_device())
    {
        jQuery("html").css('overflow', 'auto');

        jQuery('.post-num-comments a').click(function (e) {
            e.preventDefault();
            jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top}, 2000);
            return false;
        });
    } else
    {
        jQuery("html").niceScroll({cursorcolor: "#b1b1b1", scrollspeed: 100, mousescrollstep: 80, cursorwidth: "12px", cursorborder: "none", cursorborderradius: "0px"});

        //Smooth scroll on single post (comments)
        jQuery('.post-num-comments a').click(function (e) {
            e.preventDefault();
            jQuery("html").getNiceScroll(0).doScrollTop(jQuery(this.hash).offset().top);
        });
    }

    jQuery(".site-content").fitVids();


    //Add before and after "blockquote" custom class
    jQuery('blockquote.inline-blockquote').prev('p').addClass('wrap-blockquote');
    jQuery('blockquote.inline-blockquote').next('p').addClass('wrap-blockquote');
    jQuery('blockquote.inline-blockquote').css('display', 'table');

    //Placeholder show/hide
    jQuery('input, textarea').focus(function () {
        jQuery(this).data('placeholder', jQuery(this).attr('placeholder'));
        jQuery(this).attr('placeholder', '');
    });
    jQuery('input, textarea').blur(function () {
        jQuery(this).attr('placeholder', jQuery(this).data('placeholder'));
    });

    //Portfolio

    var grid = jQuery('.grid').imagesLoaded(function () {
        grid.isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });

        // bind filter button click
        jQuery('.filters-button-group').on('click', '.button', function () {
            var filterValue = jQuery(this).attr('data-filter');
            grid.isotope({filter: filterValue});
            grid.on('arrangeComplete', function () {
                jQuery(".grid-item:visible a[rel^='prettyPhoto']").prettyPhoto({
                    slideshow: false, /* false OR interval time in ms */
                    overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
                    default_width: 1280,
                    default_height: 720,
                    deeplinking: false,
                    social_tools: false,
                    iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                    changepicturecallback: function () {
                        if (!is_touch_device()) {
                            var ua = navigator.userAgent.toLowerCase();
                            if (!(ua.indexOf("safari/") !== -1 && ua.indexOf("windows") !== -1 && ua.indexOf("chrom") === -1))
                            {
                                jQuery("html").getNiceScroll().remove();
                                jQuery("html").css("cssText", "overflow: hidden !important");
                            }
                        }
                    },
                    callback: function () {
                        if (!is_touch_device()) {
                            var ua = navigator.userAgent.toLowerCase();
                            if (!(ua.indexOf("safari/") !== -1 && ua.indexOf("windows") !== -1 && ua.indexOf("chrom") === -1))
                            {
                                jQuery("html").niceScroll({cursorcolor: "#b1b1b1", scrollspeed: 100, mousescrollstep: 80, cursorwidth: "12px", cursorborder: "none", cursorborderradius: "0px"});
                            }
                        }
                    }
                });

            });
        });


        // change is-checked class on buttons
        jQuery('.button-group').each(function (i, buttonGroup) {
            var $buttonGroup = jQuery(buttonGroup);
            $buttonGroup.on('click', '.button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                jQuery(this).addClass('is-checked');
            });
        });


        //Fix for portfolio item text
        jQuery('.portfolio-text-holder').each(function () {
            jQuery(this).find('p').css('margin-top', jQuery(this).height() / 2);
        });

        //Fix for portfolio hover text fade in/out
        jQuery('.grid-item a').hover(function () {
            jQuery(this).find('.portfolio-text-holder').fadeIn('fast');
        }, function () {
            jQuery(this).find('.portfolio-text-holder').fadeOut('fast');
        });
    });


    //Fix for default menu
    jQuery('.default-menu ul').addClass('main-menu sm sm-clean');

});



jQuery(window).load(function () {

//Fix for header menu
    jQuery('.header-search').css('margin-top', 0 - jQuery('.header-search').innerHeight());

//Set menu
    jQuery('.main-menu').smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8,
        markCurrentItem: true
    });

    var $mainMenu = jQuery('.main-menu').on('click', 'span.sub-arrow', function (e) {
        var obj = $mainMenu.data('smartmenus');
        if (obj.isCollapsible()) {
            var $item = jQuery(this).parent(),
                    $sub = $item.parent().dataSM('sub');
            $sub.dataSM('arrowClicked', true);
        }
    }).bind({
        'beforeshow.smapi': function (e, menu) {
            var obj = $mainMenu.data('smartmenus');
            if (obj.isCollapsible()) {
                var $menu = jQuery(menu);
                if (!$menu.dataSM('arrowClicked')) {
                    return false;
                }
                $menu.removeDataSM('arrowClicked');
            }
        }
    });


//Show-Hide header sidebar
    jQuery('#toggle, .header-hidden-search a').on("click", multiClickFunctionStop);

//Set each image slider
    jQuery(".image-slider").each(function () {
        var id = jQuery(this).attr('id');
        if (window[id + '_pagination'] == 'true')
        {
            var pagination_value = '.' + id + '_pagination';
        } else
        {
            var pagination_value = false;
        }

        var auto_value = window[id + '_auto'];
        if (auto_value == 'false')
        {
            auto_value = false;
        } else {
            auto_value = true;
        }

        var hover_pause = window[id + '_hover'];
        if (hover_pause == 'true')
        {
            hover_pause = 'resume';
        } else {
            hover_pause = false;
        }

        var speed_value = window[id + '_speed'];

        jQuery('#' + id).carouFredSel({
            responsive: true,
            width: 'variable',
            auto: {
                play: auto_value,
                pauseOnHover: hover_pause
            },
            pagination: pagination_value,
            scroll: {
                fx: 'crossfade',
                duration: parseFloat(speed_value)
            },
            swipe: {
                onMouse: true,
                onTouch: true
            },
            items: {
                height: 'variable'
            }
        });
    });

    jQuery('.image-slider-wrapper').each(function () {
        var slider_width = jQuery(this).width();
        var pagination_width = jQuery(this).find('.carousel_pagination').width();
        jQuery(this).find('.carousel_pagination').css("margin-left", (slider_width - pagination_width) / 2);
    });


    //PrettyPhoto initial
    jQuery('a[data-rel]').each(function () {
        jQuery(this).attr('rel', jQuery(this).data('rel'));
    });

    jQuery("a[rel^='prettyPhoto']").prettyPhoto({
        slideshow: false, /* false OR interval time in ms */
        overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
        default_width: 1280,
        default_height: 720,
        deeplinking: false,
        social_tools: false,
        iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        changepicturecallback: function () {
            if (!is_touch_device()) {
                var ua = navigator.userAgent.toLowerCase();
                if (!(ua.indexOf("safari/") !== -1 && ua.indexOf("windows") !== -1 && ua.indexOf("chrom") === -1))
                {
                    jQuery("html").getNiceScroll().remove();
                    jQuery("html").css("cssText", "overflow: hidden !important");
                }
            }
        },
        callback: function () {
            if (!is_touch_device()) {
                var ua = navigator.userAgent.toLowerCase();
                if (!(ua.indexOf("safari/") !== -1 && ua.indexOf("windows") !== -1 && ua.indexOf("chrom") === -1))
                {
                    jQuery("html").niceScroll({cursorcolor: "#b1b1b1", scrollspeed: 100, mousescrollstep: 80, cursorwidth: "12px", cursorborder: "none", cursorborderradius: "0px"});
                }
            }
        }
    });


    contactFormWidthFix();

    //Fix for post opacity
    jQuery(".blog-item-holder, .post-border").css({opacity: 1});

    jQuery('.doc-loader').fadeOut('fast');

});


jQuery(window).resize(function () {
    jQuery('.image-slider-wrapper').each(function () {
        var slider_width = jQuery(this).width();
        var pagination_width = jQuery(this).find('.carousel_pagination').width();
        jQuery(this).find('.carousel_pagination').css("margin-left", (slider_width - pagination_width) / 2);
    });


    //Fix for header menu
    if (!jQuery('.header-search').hasClass("open")) {
        jQuery('.header-search').css('margin-top', 0 - jQuery('.header-search').innerHeight());
    }

    //Fix for WP menu admin bar 
    jQuery('#main-menu').css('margin-top', jQuery('#wpadminbar').height());


    contactFormWidthFix();

    //Fix for portfolio item text
    jQuery('.portfolio-text-holder').each(function () {
        jQuery(this).find('p').css('margin-top', jQuery(this).height() / 2);
    });

});

//------------------------------------------------------------------------
//Helper Methods -->
//------------------------------------------------------------------------


var contactFormWidthFix = function () {
    jQuery('.wpcf7 input[type=text], .wpcf7 input[type=email], .wpcf7 textarea').innerWidth(jQuery('.wpcf7-form').width());
};

var multiClickFunctionStop = function (e) {
    e.preventDefault();
    jQuery('#toggle, .header-hidden-search a').off("click");
    jQuery('#toggle, .header-hidden-search a').toggleClass("on");
    if (jQuery('#toggle, .header-hidden-search a').hasClass("on"))
    {
        jQuery('html, body').animate({scrollTop: 0}, 200);

        jQuery('.header-search').addClass('open').animate({'marginTop': '0'}, function () {
            jQuery('#toggle, .header-hidden-search a').on("click", multiClickFunctionStop);
        });
    } else
    {
        jQuery('.header-search').removeClass('open').animate({'marginTop': 0 - jQuery('.header-search').innerHeight()}, function () {
            jQuery('#toggle, .header-hidden-search a').on("click", multiClickFunctionStop);
        });
    }

};

function is_touch_device() {
    return !!('ontouchstart' in window);
}

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}

var SendMail = function () {

    var emailVal = jQuery('#contact-email').val();

    if (isValidEmailAddress(emailVal)) {
        var params = {
            'action': 'SendMessage',
            'name': jQuery('#name').val(),
            'email': jQuery('#contact-email').val(),
            'subject': jQuery('#subject').val(),
            'message': jQuery('#message').val()
        };
        jQuery.ajax({
            type: "POST",
            url: "php/sendMail.php",
            data: params,
            success: function (response) {
                if (response) {
                    var responseObj = jQuery.parseJSON(response);
                    if (responseObj.ResponseData)
                    {
                        alert(responseObj.ResponseData);
                    }
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                //xhr.status : 404, 303, 501...
                var error = null;
                switch (xhr.status)
                {
                    case "301":
                        error = "Redirection Error!";
                        break;
                    case "307":
                        error = "Error, temporary server redirection!";
                        break;
                    case "400":
                        error = "Bad request!";
                        break;
                    case "404":
                        error = "Page not found!";
                        break;
                    case "500":
                        error = "Server is currently unavailable!";
                        break;
                    default:
                        error = "Unespected error, please try again later.";
                }
                if (error) {
                    alert(error);
                }
            }
        });
    } else
    {
        alert('Your email is not in valid format');
    }
};
>>>>>>> parent of 0b04bf2... new layout
