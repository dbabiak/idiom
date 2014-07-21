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
    var content = this.template({problem: this.model});
    this.$el.html(content);
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
        Backbone.history.navigate('/', {trigger: true});
      }
    });
  }
});
