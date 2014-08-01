App.Views.Solution = Backbone.View.extend({
  template: JST['solutions/show'],

  initialize: function(options) {
      this.listenTo(this.model, 'sync', this.render);
      this.includeProblemLink = options.includeProblemLink;
      this.includeCommentChain = options.includeCommentChain;
      this.removeSubmitter = options.removeSubmitter;
      this.model.fetchComments();
    },

  className: 'solution-view',

  render: function() {
    var content = this.template({
      solution: this.model,
      includeProblemLink: this.includeProblemLink,
      removeSubmitter: this.removeSubmitter
    });
    // debugger;
    this.$el.html(content);
    if (this.includeCommentChain) { this.appendComments(); }

    return this;
  },

  appendComments: function() {
    var commentChain = new App.Views.CommentChain({
      comments: this.model.comments(),
      root: this.model,
      padding: 0
    });
    commentChain.$el.css('padding-left', '20px');
    this.$el.append(commentChain.render().$el)
  },

  events: {
    'click a.upvote': 'upvote',
    'click a.problem-title': 'viewInGraph'
  },

  upvote: function(event) {
    event.preventDefault();
    var self = this;
    $.ajax({
      url: '/api/solution_likes',
      type: 'POST',
      data: {upvote: {solution_id: this.model.id}},
      success: function(response) {
        var count = 1 + parseInt(self.$('span.num-upvotes').text().slice(1));
        self.$('span.num-upvotes').text('(' + count + ')');
      },
      failure: function(response) {
        debugger;
      }
    })
  },

  viewInGraph: function(event) {
    var prob_id = this.model.get('problem_id')
    var problem = App.problems.get(prob_id)
    view = new App.Views.ProblemsShowView({model: problem});
    setTimeout(function() {
      ht.onClick(prob_id);
      App.currentView = view;
    }, 1000);
    setTimeout(function() {
      $('#right-container').hide();
      $('#right-container').html(view.render().$el);
      $('#right-container').fadeIn(1000);
    }, 1700)

  }

});
