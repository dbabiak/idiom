
App.Views.ProfileView = Backbone.View.extend({
  template: JST['users/profile'],

  className: 'col-xs-offset-3',

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
  },

  render: function() {
    var content = this.template({user: this.model});
    this.$el.html(content);
    this.attachSolutionViews();
    return this;
  },

  attachSolutionViews: function() {
    $ownSolutions = this.$('.own-solutions');
    this.model.ownSolutions().forEach(function(solution) {
      var view = new App.Views.SolutionView({
          model: solution,
          includeProblemLink: true
        });
      $ownSolutions.append(view.render().$el);
    })
  }

});
