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

  events: {'click button.submit': 'submit'},
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
      this.promptSignIn();
    }

  },

  promptSignIn: function() {
    //fire up modal that prompts for sign-in stuff
    //it will also be bound to the links in the navbar
    $('#auth-modal').modal();
  }
});
