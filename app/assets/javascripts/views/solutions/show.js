App.Views.SolutionView = Backbone.View.extend({
  template: JST['solutions/show'],

  initialize: function(options) {
      this.listenTo(this.model, 'sync', this.render);
      this.includeProblemLink = options.includeProblemLink;
      this.model.fetchComments();
    },

  className: 'solution-view',

  render: function() {
    var content = this.template({
      solution: this.model,
      includeProblemLink: this.includeProblemLink
    });
    // debugger;
    this.$el.html(content);
    this.appendComments();

    return this;
  },

  appendComments: function() {
    var commentChain = new App.Views.CommentChain({
      comments: this.model.comments(),
      parent: this.model,
      padding: 5
    });
    this.$el.append(commentChain.render().$el)
  }
});
