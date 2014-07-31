/* global App */
window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#content');
    App.problems = new App.Collections.Problems()
    $.ajax({
      url: '/api/session',
      action: 'GET',
      success: function(response) {
        App.user = (response ? new App.Models.User(response) : null);
        if (App.user) {
          App.signedInNavbar()
        } else {
          App.signedOutNavbar()
        }
      }
    });

    App.problems.fetch({
      success: function() {
        new App.Routers.AppRouter($rootEl);
        Backbone.history.start();
      }
    });
  }
};

App.geditor = function(id) {
  var _editor = ace.edit(id);
  _editor.setTheme('ace/theme/tomorrow_night_blue')
  _editor.getSession().setMode('ace/mode/ruby')
  _editor.getSession().setTabSize(2);
  _editor.getSession().setUseSoftTabs(true);
  return _editor;
};
