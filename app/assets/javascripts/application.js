//= require jquery
//= require jquery_ujs

//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .


$(document).ready(function() {
    console.log("YAYYYYYYY")
  if ($('.pagination').length) {
    $(window).scroll(function() {
      var url = $('.pagination .next_page').attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Please Wait...");
        return $.getScript(url);
      }
    });
    return $(window).scroll();
  }
});
