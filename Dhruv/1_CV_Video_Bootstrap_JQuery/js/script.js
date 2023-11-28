// Adjust video height on window resize
$(window).on('resize', function () {
    $('#video-bg').height($(window).height());
  });
  
  // Initialize on document ready
  $(document).ready(function () {
    // Adjust video height on page load
    $('#video-bg').height($(window).height());
  });
  