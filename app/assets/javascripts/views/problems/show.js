/* global App, JST*/
App.Views.ProblemsShowView = Backbone.View.extend({
  template: JST['problems/show'],
  events: {
    'click button.submit': 'submit'
  },
  render: function() {
    var content = this.template({problem: this.model});
    this.$el.html(content);
    this.attachSubViews();
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
  attachSubViews: function() {
    var solutionCases = new App.Views.SolutionCaseIndexView({
      collection: this.model.solutionCases()
    });
    this.$('#solution-cases').append(solutionCases.render().$el);
  }
});
