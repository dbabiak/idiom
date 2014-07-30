
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
    var that = this;
    App.Models.Problem.categories.forEach(function(cat){
      var solutions = that.categorySolutions(that.model.ownSolutions(), cat);
      solutions.comparator = 'rating';
      var view = new App.Views.SolutionsIndex({
        collection: solutions,
        category: cat
      });
      that.$('.own-solutions').append(view.render().$el);
    });
  },

  toggleList: function(event) {},

  categorySolutions: function(solutions, cat) {
    return new App.Collections.Solutions(solutions.where({category: cat}), {});
  }

});
