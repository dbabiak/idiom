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
    
    problem.save({}, {
      success: function(response) {
        debugger;
        console.log("hello from inside the function!");
        params.solution_cases.forEach(function(scparam){
          problem.solutionCases().create( _.extend(scparam, {problem_id: problem.id}) );
        });
      }
    });
    Backbone.history.navigate('#/home', {trigger: true})
  }
});
