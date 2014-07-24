
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
      var view = new App.Views.SolutionView({model: solution});
      var content = $(view.render().$el);
      content.attr('id', 'solution-' + solution.id);
      $ownSolutions.append(view.render().$el);
      // var editor = ace.edit('solution-' + solution.id);
      // editor.setTheme('ace/theme/tomorrow_night_blue')
      // editor.setReadOnly(true);
      // editor.getSession().setMode('ace/mode/ruby')
    })
  }

});
