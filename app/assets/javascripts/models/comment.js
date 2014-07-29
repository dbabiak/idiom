App.Models.Comment = Backbone.Model.extend({
  initialize: function(options) {
    // debugger;
    for (var key in options) {
      this[key] = options[key];
    }
  },

  urlRoot: '/api/comments'
});
