App.Views.ProblemsNewView = Backbone.View.extend({
  template: JST['problems/new'],
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

    problem.save({}, {
      success: function(response) {
        alert(response);
        App.problems.add(response);
      }
    });
    Backbone.history.navigate('#/home', {trigger: true})
  }
});
