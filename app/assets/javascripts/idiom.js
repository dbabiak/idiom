/* global App */
window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#content');
    App.problems = new App.Collections.Problems();

    // THIS IS A HACK. App ignores id and just returns current user's info
    // We'll eventually have to move to a 'manual' AJAX query
    App.user = new App.Models.User({id: 1});

    App.problems.fetch({
      success: function() {
        new App.Routers.AppRouter($rootEl);
        Backbone.history.start();
      }
    });
  }
};
