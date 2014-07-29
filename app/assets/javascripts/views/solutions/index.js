App.Views.SolutionsIndex = Backbone.View.extend({
  template: JST['solutions/index'],
  
  initialize: function(options) {
    //collection set here
    //listeners?
    this.category = options.category;
  },

  render: function() {
    this.$el.html = this.template({category: this.category});
    this.collection.each(function(solution) {
      var view = new App.Views.Solution({model: solution});
      this.$('.solution-list').append(view.render().$el);
    });
    return this;
  },

  events: {}

});
