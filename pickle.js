$(document).ready(function() {
  $("#lp-h3").click(function() {
    $('html, body, .container').animate({
      scrollTop: $("#landingSection").offset().top
    }, 2000);
  });
  $("#storyLi").click(function() {
    $('html, body, .container').animate({
      scrollTop: $("#storySection").offset().top
    }, 2000);
  });
  $("#pantryLi").click(function() {
    $('html, body, .container').animate({
      scrollTop: $("#pantrySection").offset().top
    }, 2000);
  });
  $("#galleryLi").click(function() {
    $('html, body, .container').animate({
      scrollTop: $("#gallerySection").offset().top
    }, 2000);
  });
  $("#contactLi").click(function() {
    $('html, body, .container').animate({
      scrollTop: $("#contactSection").offset().top
    }, 2000);
  });
  $(function() {
    var jcarousel = $('.jcarousel');

    jcarousel
      .on('jcarousel:reload jcarousel:create', function() {
        var carousel = $(this),
          width = carousel.innerWidth();

        if (width >= 600) {
          width = width / 3;
        } else if (width >= 350) {
          width = width / 2;
        }

        carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
      })
      .jcarousel({
        wrap: 'circular'
      });

    $('.jcarousel-control-prev')
      .jcarouselControl({
        target: '-=1'
      });

    $('.jcarousel-control-next')
      .jcarouselControl({
        target: '+=1'
      });

    $('.jcarousel-pagination')
      .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
      })
      .on('click', function(e) {
        e.preventDefault();
      })
      .jcarouselPagination({
        perPage: 1,
        item: function(page) {
          return '<a href="#' + page + '">' + page + '</a>';
        }
      });
  });
});
