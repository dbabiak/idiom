/* global App */
window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#content');
    App.problems = new App.Collections.Problems();
    
    App.problems.fetch({
      success: function() {
        new App.Routers.AppRouter($rootEl);
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  App.initialize();
});
