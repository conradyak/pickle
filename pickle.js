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

  function init_map() {
    var myOptions = {
      zoom: 13,
      center: new google.maps.LatLng(37.07058, -93.801714),
      mapTypeId: google.maps.MapTypeId.HYBRID
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(37.07058, -93.801714)
    });
    infowindow = new google.maps.InfoWindow({
      content: '<strong>Title</strong><br>14231 Lawrence 2140 Mount Vernon, MO 65712<br>'
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
  }
  google.maps.event.addDomListener(window, 'load', init_map);
});
