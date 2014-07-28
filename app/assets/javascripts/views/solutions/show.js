App.Views.SolutionView = Backbone.View.extend({
  template: JST['solutions/show'],

  initialize: function(options) {
      this.listenTo(this.model, 'sync', this.render);
      this.includeProblemLink = options.includeProblemLink;
    },

    className: 'solution-view',

    events: {
      'click .upvote': 'upvote'
    },

  render: function() {
    debugger;
    var content = this.template({
      solution: this.model,
      includeProblemLink: this.includeProblemLink
    });
    this.$el.html(content);
    return this;
  },

  upvote: function(event) {
    // Make a custom ajax request.
    event.preventDefault();
    $.ajax({
        url: "/api/solution_likes",
        type: "POST",
        data: { solution_like: {solution_id: this.model.id} },
        success: function (response) {
          //change color of 'like' button'
          debugger;
        }
      });
  }

});
