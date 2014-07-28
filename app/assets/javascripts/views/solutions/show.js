App.Views.SolutionView = Backbone.View.extend({
  template: JST['solutions/show'],

  initialize: function(options) {
      this.listenTo(this.model, 'sync', this.render);
      this.includeProblemLink = options.includeProblemLink;
      this.model.fetchComments();
    },

    className: 'solution-view',

    events: {
      'click new-comment': 'newComment'
    },

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
    var commentsView = new App.Views.CommentsIndexView({
      collection: this.model.comments()
    });
    this.$el.append(commentsView.render().$el)
  },

  newComment: function(event) {
    debugger;
  }

});
