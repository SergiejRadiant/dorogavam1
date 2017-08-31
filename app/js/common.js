$(function() {

	!function (e, t, n) {
   "use strict";
    var r = e.querySelectorAll(".menu"), a = function (e, t) {
    var n = t.getAttribute("aria-hidden");
    "false" == n ? (e.setAttribute("aria-expanded", "false"), 
		            t.setAttribute("aria-hidden", "true") ) : 
		           (e.setAttribute("aria-expanded", "true"), 
		            t.setAttribute("aria-hidden", "false")
					);
    };
    [].forEach.call(r, function (e, t) {
    var n = e.nextElementSibling;
            e.setAttribute("aria-expanded", "false"), 
		    e.setAttribute("aria-controls", "button-menu-" + t), 
            n.setAttribute("aria-hidden", "true"), 
			n.setAttribute("aria-labelledby", "content-menu-" + t),
			n.setAttribute("tabindex", "0"), 
		e.addEventListener("click", function () {
            return a(this, n), !1;
        }, !1), e.addEventListener("keydown", function (e) {
            32 === e.which && (e.preventDefault(), a(this, n));
        }, !1);
    });
	}(document, window);

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

});
