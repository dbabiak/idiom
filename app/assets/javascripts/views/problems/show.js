/* global App, JST*/
App.Views.ProblemsShowView = Backbone.View.extend({
  template: JST['problems/show'],
  initialize: function() {
    this.listenTo(this.model.solutionCases(), 'add', 'testSync')
  },
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
        //HAVE TO ADD IT TO SOME NESTED COLLECTION
      },
      failure: function() {
        alert("problems...");
      }

    });
  },
  attachSubViews: function() {
    var solutionCases = new App.Views.SolutionCaseIndexView({
      collection: this.model.solutionCases()
    });
    this.$('#solution-cases').append(solutionCases.render().$el);
    //This is enough to work for now no?
    //Now we have to move the view stuff into sub-folders.
    //Fuck. listeners.
  },

  testSync: function() {
    console.log("LINE 45 IN SHOW VIEW")
  }

});
