App.Views.CommentView = Backbone.View.extend({
  template: JST['comments/index_row'],
  initialize: function(options) {
    this.padding = options.padding;
    this.parent = options.parent;
  },
  render: function() {
    // *********************************
    // ***********************COME BACK TO THIS*******************
    var numCols = 'some number here that we have to figure out'
    var content = this.template({comment: this.model});
    this.$el.html(content);
    return this;
  },

  appendComments: function() {
    var commentChain = new App.Views.CommentChain({
      parent: this.model,
      comments: this.model.comments(),
      padding: 5
    });
    this.$el.append(commentChain.render().$el);
  }

});
