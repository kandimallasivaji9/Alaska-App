"use strict";
(function ($) {
	$(document).ready(function () {

    $('.navbar-nav').css('opacity', 0);

    // Code for the navbar button click
    $('[data-toggle="slide-collapse"]').on('click', function() {
        let $navMenuCont = $($(this).data('target'));

      if( $(this).hasClass('collapsed') ) {
        $(this).removeClass('collapsed');
        $('body').addClass('locked');
        $navMenuCont.css('display','block').animate({'left':'0'}, 150, function() {
          $navMenuCont.find('.navbar-nav').animate({'opacity': 1}, 150);
        });
      }
      else {
        $(this).addClass('collapsed');
        $('.navbar-nav > .main').removeClass('main-open').removeClass('soft-icon');
        $navMenuCont.animate({'left':'-100%'}, 150, function() {
          $navMenuCont.find('.navbar-nav').css('opacity', 0);
          $(this).css('display', 'none');
          $('body').removeClass('locked');
        });
      }

    });

    // Code when an item of the main menu has children
    $(document).on('click', '.navbar-default .main > a', function(e) {
      e.stopPropagation();

      $(this).closest('.main').find('.main-button').click();
    });

    // Code for the menu chevron click
    $(document).on('click','.navbar-default .main-button',function(e) {
      e.stopPropagation();

      var main  = $(this).closest('.main');
      var index = $('.navbar-nav .main').index(main);
      $('.navbar-nav .main').not(':eq('+index+')').addClass('soft-icon');

      main.addClass('main-open');
    });

    // Code when the

    // Code for submenu close button
    $(document).on('click', '.navbar-default .main-submenu-close', function(e) {
      e.stopPropagation();

      $('.navbar-nav .main').removeClass('main-open').removeClass('soft-icon');
      $('.main-submenu .dropdown.open').removeClass('open');
    });

    // Prevent click propagate
    $(document).on('click', '.dropdown-menu > li > a', function(e) {
      e.stopPropagation();
    });

	});
})(jQuery);
