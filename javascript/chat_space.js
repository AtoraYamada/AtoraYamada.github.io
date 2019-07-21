$(function() {
  var topBtn = $('#page-top');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  //スクロールしてトップ
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});
$(function() {
  $('.function a').on('click', function() {
    current_scrollY = $( window ).scrollTop(); 
    $( '.wrapper' ).css( {
      position: 'fixed',
      width: '100%',
      top: -1 * current_scrollY
    });
  });

  $('#a').on('click', function() {
    $('#overlay, .aa').fadeIn();
  });
  $('#b').on('click', function() {
    $('#overlay, .bb').fadeIn();
  });
  $('#c').on('click', function() {
    $('#overlay, .cc').fadeIn();
  });
  $('#d').on('click', function() {
    $('#overlay, .dd').fadeIn();
  });
  $('#e').on('click', function() {
    $('#overlay, .ee').fadeIn();
  });
  $('#f').on('click', function() {
    $('#overlay, .ff').fadeIn();
  });
  
  $('.close').on('click', function() {
    $( '.wrapper' ).attr( { style: '' } );
    $( 'html, body' ).prop( { scrollTop: current_scrollY } );
    $('#overlay, .modalWindow').fadeOut();
  });
  
  locateCenter();
  $(window).resize(locateCenter);

  function locateCenter() {
    let w = $(window).width();
    let h = $(window).height();
    let cw = $('.modalWindow').outerWidth();
    
    $('.modalWindow').css({
      'left': ((w - cw) / 2) + 'px',
      'top': ((h) / 60) + 'px'
    });
  }
});