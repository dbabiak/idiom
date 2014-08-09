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
    this.attachAuthModal();
    return this;
  },
  attachAuthModal: function() {
    var modal = new App.Views.AuthView();
    this.$el.append(modal.render().$el);
  },

  events: {
    'click button.submit': 'submit',
    'click button.demo-problem': 'demoProblem'
  },

  submit: function(event) {
    event.preventDefault();
    if (App.user) {
      var params = this.$('form').serializeJSON();
      params.problem.category = ht.center().data.category.toLowerCase();
      params.problem.rating = ht.center().data.rating;
      var problem = new App.Models.Problem(params.problem);

      problem.save({}, {
        success: function(response) {
          App.problems.add(response);
          ht.addNode(response.attributes)
        }
      });
    } else {
      App.popAuthModal(event, 320, 240);
    }
  },

  demoProblem: function(event) {
    $('#title').val('Times three');
    $('#description').val('Write a method foo(n) that triples n');
    $('#solution').val('expect("it triples its argument", foo(3) == 9)\nexpect("it handles zero correctly", foo(0) == 0)');
    $('#example').val('foo(4) == 12\nfoo(7) == 21');
  }
});
