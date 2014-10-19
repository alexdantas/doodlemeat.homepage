/**
 * Custom scripts for the whole website.
 */

$(document).ready(function() {

	// Do something when the page loads...

});

/**
 * Forces the footer to stay on the bottom
 * of the page.
 *
 * Also makes the footer have the same width
 * as the header.
 *
 * Source:
 * http://visualdecree.co.uk/posts/2013/12/17/responsive-sticky-footers/
 */
$(window).bind("load resize", function() {

	var $footer = $(".my-footer");
	var $header = $(".my-header");

	// Will set those dynamically
	var footerHeight = 0;
	var footerTop    = 0;

	// Do it!
	positionFooter();

	// ...do what..?
	function positionFooter() {

		footerHeight = $footer.height();
		footerTop    = ($(window).scrollTop() + $(window).height() - footerHeight) + "px";

		if (($(document.body).height() + footerHeight) < $(window).height()) {
			$footer.css({
				position: "absolute"
			}).css({
				top: footerTop,

				// HACK: without this the footer magically gets
				//       pushed back with a fake width
				width: $header.width()
			});
		} else {
			$footer.css({
				position: "static"
			});
		}
	};
});

