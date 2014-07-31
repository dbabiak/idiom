App.popAuthModal = function(event, offX, offY) {
  var offsetX = offX || 100;
  var offsetY = offY || 0;
  var margin_left = event.pageX - offsetX;
  var margin_top = event.pageY - offsetY;
  var modal = $(document).find('#auth-modal-dialog');
  modal.css('margin-left', margin_left + 'px');
  modal.css('margin-top', margin_top + 'px');
  modal.parent().modal();
};


//this could potentially be a fade-in
App.signedOutNavbar = function() {
  $('#profile').hide(600)
  $('#sign-out').hide(600);
  $('#sign-in').show(600);
  $('#sign-up').show(600);
};

App.signedInNavbar = function() {
  $('#profile').show(600);
  $('#profile').text(App.user.attributes.username);
  $('#sign-out').show(600);
  $('#sign-in').hide(600);
  $('#sign-up').hide(600);
};
