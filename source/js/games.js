/**
 * Scripts for the "games" page.
 * Makes possible to dynamically switch items with isotope.
 */

jQuery(document).ready(function($){

	// Making buttons become active whenever you
	// click on them (and make others inactive)
	$('.masthead a').click(function(event) {
		// Ignore this click, don't scroll the page
		event.preventDefault();

		$('.masthead li').removeClass('active');
		$(this).parent('li').addClass('active');
	});

	// Options for Isotope
	// (the thing that makes the grid dynamic)
	var isotope_options = {
		// Each item inside it have this class
		itemSelector : '.game',

		// What will it use to sort the items
		getSortData : {
			popularity : '[data-popularity] parseInt'
		},

		// Setting default sorting
		// (by that sortData above, non-ascending order)
		sortBy        : 'popularity',
		sortAscending : false,

		// Lines have the height of the tallest item
		layoutMode    : 'fitRows',

		// Don't hide anyone, at least when starting
		filter        : '*'
	};

	// Finally, initializing Isotope!
	var $isotopeInstance = $('.games').isotope(isotope_options);

	// Function that filters the items
	// This will get called when you click on a button
	// It uses attribute `data-filter` to select only items that
	// are part of a specific class.
	var filterFunction = function() {
		isotope_options.filter = $(this).attr('data-filter');

		// Whenever we change the filter we have
		// to reinitialize Isotope
		$isotopeInstance = $('.games').isotope(isotope_options);
	};

	// Finally, every time you click on any <a>,
	// the function above will get called
	$('.masthead').on('click', 'a', filterFunction);

});

