App.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  ownSolutions: function() {
    if (!this._ownSolutions) {
      this._ownSolutions = new App.Collections.Solutions([], {user: this});
    }
    return this._ownSolutions;
  },

  likedSolutions: function() {
    if (!this._likedSolutions) {
      this._likedSolutions = new App.Collections.Solutions([], {user: this});
    }
    return this._likedSolutions;
  },

  parse: function(payload) {
    if (payload.own_solutions) {
      this.ownSolutions().set(payload.own_solutions, {parse: true})
      delete payload.own_solutions;
    }

    if (payload.liked_solutions) {
      this.likedSolutions().set(payload.liked_solutions, {parse: true})
      delete payload.liked_solutions;
    }
    return payload;
  }

});
