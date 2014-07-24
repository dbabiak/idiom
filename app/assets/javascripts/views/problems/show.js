/* global App, JST*/
App.Views.ProblemsShowView = Backbone.View.extend({
  template: JST['problems/show'],

  className: 'col-xs-offset-3',

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
    $('#response-message').text('');
    $('.spinner').toggle()
    var content = editor.getValue();
    this.$('#solution').val(content);
    var params = this.$('form').serializeJSON();
    var newSoln = new App.Models.Solution(params['solution']);
    newSoln.save({}, {
      success: function(response) {
        setTimeout(function() {
          $('#response-message').text('Success!');
        }, 900)
        $('.spinner').toggle(1000)
      },
      error: function(response) {
        setTimeout(function() {
          $('#response-message').text('Error. Stack traces coming soon (tm)');
        }, 900)
        $('.spinner').toggle(1000)
      }
    });
  },

});
