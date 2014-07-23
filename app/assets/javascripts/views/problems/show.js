/* global App, JST*/
App.Views.ProblemsShowView = Backbone.View.extend({
  template: JST['problems/show'],
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
    var content = editor.getValue();
    this.$('#solution').val(content);
    var params = this.$('form').serializeJSON();
    var newSoln = new App.Models.Solution(params['solution']);
    newSoln.save({}, {
      success: function(response) {
        alert('hooray!')
      },
      error: function(response) {
        alert(response);
      }

    });
  },

});
