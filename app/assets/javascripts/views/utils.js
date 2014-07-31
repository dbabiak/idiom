App.popAuthModal = function(event, offX, offY) {
  debugger;
  var offsetX = offX || 100;
  var offsetY = offY || 0;
  var margin_left = event.pageX - offsetX;
  var margin_top = event.pageY - offsetY;
  var modal = $(document).find('#auth-modal-dialog');
  modal.css('margin-left', margin_left + 'px');
  modal.css('margin-top', margin_top + 'px');
  modal.parent().modal();
}
