$(function() {
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top-62
    }, 800, 'easeInOutQuint', function () {
      window.location.hash = target;
    });
  });
  $('.menubutton').click(function(e) {
    e.stopPropagation();
    if($('.nav').hasClass('open')) {
      $('.nav').removeClass('open');
    } else {
      $('.nav').addClass('open');
    }
  });
  $('html').click(function() {
    if($('.nav').hasClass('open')) {
      $('.nav').removeClass('open');
    }
  });
  // Slick
  $('.jq-slick').slick({
    arrows: true,
    dots: true
  });
})