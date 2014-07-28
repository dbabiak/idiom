App.Collections.Comments = Backbone.Collection.extend({
  url: '/api/comments',
  model: App.Models.Comment,
  initialize: function(models, options) {
    this.user = options.user;
    this.solution = options.solution;
  }
});
