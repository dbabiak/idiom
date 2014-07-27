App.Views.ProblemsNewView = Backbone.View.extend({
  template: JST['problems/new'],
  className: 'col-xs-offset-3',
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
        App.problems.add(response);
        var rootId = response.attributes.category[0] + response.attributes.rating;
            debugger;
        ht.addNode(rootId, problem.id)
      }
    });
    Backbone.history.navigate('#/home', {trigger: true})
  }
});
