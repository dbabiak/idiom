App.Views.ProblemsNewView = Backbone.View.extend({
  template: JST['problems/new'],
  initialize: function() {/*does nothing */},
  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  events: {'click button.submit': 'submit'},
  submit: function(event) {
    event.preventDefault();
    var params = this.$('form').serializeJSON();
    var problem = new App.Models.Problem(params.problem);
    
    debugger;
    problem.save({}, {
      success: function(response) {
        debugger;
      }
    });
  }
});
