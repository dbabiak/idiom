App.Views.AuthView = Backbone.View.extend({
  template: JST['users/auth'],

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  events: {
    'click button.sign-in': 'signIn',
    'click button.sign-up': 'signUp',
    'click button.guest': 'guestUser'
  },

  signIn: function(event) {
    event.preventDefault();
    var url = '/api/session';
    var data = this.$('form').serializeJSON();
    this.postForm(url, data);
  },

  signUp: function(event) {
    //Call a serialize JSON on the form
    event.preventDefault();
    var url = '/api/users';
    var data = this.$('form').serializeJSON();
    this.postForm(url, data);
  },

  guestUser: function(event) {
    event.preventDefault();
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
    var self = this;
    $.ajax({
      url: url,
      type: 'POST',
      data: data,
      success: function(response) {
        App.user = (response ? new App.Models.User(response) : null);
        self.$('#auth-modal').modal('hide');
        App.signedInNavbar();
      }
    });
  }
});
