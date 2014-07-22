/* global App, JST*/
App.Views.ProblemsShowView = Backbone.View.extend({
  template: JST['problems/show'],
  initialize: function() {
    //Might have to do something with subviews, etc.
  },
  events: {
    'click button.submit': 'submit'
  },
  render: function() {
    debugger;
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
      success: function() {
        //HAVE TO ADD IT TO SOME NESTED COLLECTION
      },
      failure: function() {
        alert("you suck");
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
  }
  
});
