/**
 * Created by williamleong on 4/20/15.
 */

Template.home.rendered = function() {
  var options, w, winHeight, winWidth;
  w = new WOW().init();
  winWidth = $(window).width();
  winHeight = $(window).height();
  $("#intro").css({
    width: winWidth,
    height: winHeight
  });
  $(window).resize(function() {
    return $("#intro").css({
      width: $(window).width(),
      height: $(window).height()
    });
  });
  if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
    $('#intro').addClass('mobile');
  } else {
    options = {
      forceHeight: false,
      smoothScrolling: false
    };
    skrollr.init(options).refresh();
  }
  return $(document).ready(function() {
    return $('#loading-overlay').fadeOut(800);
  });
};