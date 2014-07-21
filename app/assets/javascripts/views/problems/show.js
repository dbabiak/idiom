/* global App, JST*/
App.Views.ProblemsShowView = Backbone.View.extend({
  template: JST['problems/show'],
  initialize: function() {
    //Might have to do something with subviews, etc.
  },
  render: function() {
    var content = this.template({problem: this.model});
    this.$el.html(content);
    return this;
  }
});
