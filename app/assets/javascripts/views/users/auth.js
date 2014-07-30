App.Views.AuthView = Backbone.View.extend({
  template: JST['users/auth'],

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  events: {
    'click button.submit': 'signIn',
    'click button.sign-up': 'signUp',
    'click button.guest-submit': 'guestUser'
  },

  signIn: function() {
    var url = '/api/users';
    var data = this.$('form').serializeJSON();
    this.postForm(url, data);
  },

  signUp: function() {
    //Call a serialize JSON on the form.
    var url = '/api/users';
    var data = this.$('form').serializeJSON();
    this.postForm(url, data);
  },

  guestUser: function() {
    var url = '/api/session';
    var data = {
      user: {
        username: 'otto',
        password: 'markov'
      }
    }
    this.postForm(url, data);
  },

  postForm: function(url, data) {
    $.ajax({
      url: url,
      type: 'POST',
      data: data,
      success: function(response) {
        App.user = response;
        debugger;
      }
    });
  }
});
