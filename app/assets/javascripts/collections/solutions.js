/* global App, JST*/
App.Collections.Solutions = Backbone.Collection.extend({
  url: '/api/solutions',
  model: App.Models.Solution,
  initialize: function(models, options) {
    this.user = options.user;
  }
});
