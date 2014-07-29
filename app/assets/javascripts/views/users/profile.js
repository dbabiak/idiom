
App.Views.ProfileView = Backbone.View.extend({
  template: JST['users/profile'],

  className: 'col-xs-offset-3',

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'click toggle-list': 'toggleList'
  },

  render: function() {
    var content = this.template({user: this.model});
    this.$el.html(content);
    this.attachOwnSolutions();
    return this;
  },

  attachOwnSolutions: function() {
    App.Models.Problem.categories.each(function(cat){
      var solutions = this.model.ownSolutions().where({category: cat});
      solutions.comparator = 'rating';
      var view = new App.Views.SolutionsIndex({
        collection: solutions,
        category: cat
      });
      this.$('.own-solutions').append(view.render().$el);
    });
  },

  toggleList: function(event) {}

});
