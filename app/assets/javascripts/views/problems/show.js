/* global App, JST*/
App.Views.ProblemsShowView = Backbone.View.extend({
  template: JST['problems/show'],
  initialize: function() {
    //Might have to do something with subviews, etc.
  },
  events: {
    'click button.submit': 'submit'
  },
  render: function() {
    var content = this.template({problem: this.model});
    this.$el.html(content);
    return this;
  },
  submit: function(event) {
    event.preventDefault();
    debugger;
    var content = editor.getValue();
    this.$('#solution').val(content);
    var params = $(event.currentTarget).serializeJSON();
    var newSoln = App.Models.Solution(params['solution'])
    //Now serialize to JSON and post to the server
  }
});
