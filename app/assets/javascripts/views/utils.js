App.popAuthModal = function(event, offX, offY, options) {
  debugger;
  options = options || {};
  var offsetX = offX || 100;
  var offsetY = offY || 0;
  var margin_left = event.pageX - offsetX;
  var margin_top = event.pageY - offsetY;
  var modal = $(document).find('#auth-modal-dialog');
  debugger;
  modal.css('margin-left', margin_left + 'px');
  modal.css('margin-top', margin_top + 'px');
  App.setAuthModal(modal, options.signIn);
  modal.parent().modal();
};

App.setAuthModal = function($modal, signIn) {
  debugger;
  if (signIn) {
    $modal.find('#auth-title').text('Sign In');
    $modal.find('button.sign-up').hide();
    $modal.find('button.sign-in').show();
  } else {
    $modal.find('#auth-title').text('Sign Up');
    $modal.find('button.sign-up').show();
    $modal.find('button.sign-in').hide();
  }
}


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
