/* global App, JST*/
App.Views.ProblemsIndexView = Backbone.View.extend({
  template: JST['problems/index'],
  initialize: function() {
    //this.collection = options.collection;
    this.listenTo(this.collection, 'sync add', this.render);
  },
  render: function() {
    debugger;
    var content = this.template();
    this.$el.html(content);
    var $problemsIndex = this.$('.problems-index');
    this.collection.each(function(problem) {
      var indexRow = new App.Views.ProblemsIndexRow({model: problem});
      $problemsIndex.append(indexRow.render().$el);
    });
    return this;
  }

});

App.Views.ProblemsIndexRow = Backbone.View.extend({
  template: JST['problems/index_row'],
  initialize: function() {},
  tagName: 'li',
  render: function() {
    var content = this.template({problem: this.model});
    this.$el.html(content);
    return this;
  }
});
