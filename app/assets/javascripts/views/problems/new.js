App.Views.ProblemsNewView = Backbone.View.extend({
  template: JST['problems/new'],

  className: 'top-margined',

  initialize: function(options) {
    this.options = options;
    this.options.category = options.category.charAt(0).toUpperCase() +
        options.category.slice(1);
  },
  render: function() {
    var content = this.template({options: this.options});
    this.$el.html(content);
    return this;
  },
  events: {'click button.submit': 'submit'},
  submit: function(event) {
    event.preventDefault();
    var params = this.$('form').serializeJSON();
    params.problem.category = ht.center().data.category.toLowerCase();
    params.problem.rating = ht.center().data.rating;
    var problem = new App.Models.Problem(params.problem);

    problem.save({}, {
      success: function(response) {
        App.problems.add(response);
        debugger;
        ht.addNode(response.attributes)
      }
    });
  }
});
