$(function() {


	jQuery(document).ready(function(){
		jQuery('ul.sf-menu').supersubs({
			minWidth:	12,	 // minimum width of submenus in em units
			maxWidth:	34,	 // maximum width of submenus in em units
			extraWidth:	1	 // extra width can ensure lines don't sometimes turn over
							 // due to slight rounding differences and font-family
		}).superfish();		 // call supersubs first, then superfish, so that subs are
							 // not display:none when measuring. Call before initialising
							 // containing tabs for same reason.
	});


	function setEqualHeight(columns) {
		
		var tallestcolumn = 0;
		columns.each(function() {
			currentHeight = $(this).height();
				if(currentHeight > tallestcolumn) {
				tallestcolumn = currentHeight;
			}
		});
		columns.height(tallestcolumn);
	}

	$(document).ready(function() {
	setEqualHeight($(".services-menu > li > div"));
	});

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-with-zoom mfp-align-top',
		image: {
			verticalFit: false,
			cursor: 'null'
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	/************** Mobile nav *******************/
	var mobileUL = $(".cloned > ul > li").clone();
		 $("#mobile-nav ul").append(mobileUL);
		 
	//Option of mobile-menu
	 $("#mobile-nav").mmenu({
    	extensions:['widescreen','theme-white','effect-menu-slide','pagedim-black'],
    	navbar:{
    		title: "Меню"
    	}
    });

	//Hamburger click handler
	var mmApi = $("#mobile-nav").data( "mmenu" );
 	mmApi.bind("closed",function(){
 		//$(".sandwich").removeClass("active");
 	});

	
 	$("#mobile-menu-btn").click(function() {

 		
 		/*if($(".sandwich").hasClass("active"))
 		{
 			mmApi.close();
 			return false;
 		}
 		$(".sandwich").toggleClass("active");*/
 		mmApi.open();
 		return false;
 	});
 	/*********************************************/

});
