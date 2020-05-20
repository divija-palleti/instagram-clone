jQuery(function() {
if ($('.pagination').length) {
  $(window).scroll(function() {
    var url = $('.pagination .next_page a').attr('href');
    if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      $('.pagination').text("Please Wait...");
      return $.getScript(url);
    }
  });
  return ;
}
});

