App.Models.Comment = Backbone.Model.extend({
  initialize: function(options) {
    // debugger;
    for (var key in options) {
      this[key] = options[key];
    }
  },

  urlRoot: '/api/comments',

  comments: function() {
    if (!this._comments) {
      this._comments = new App.Collections.Comments([], {comment: this});
    }
    return this._comments;
  },

  parse: function(payload){
    if (payload.comments) {
      this.comments().set(payload.comments);
      delete payload.comments;
    }
    return payload;
  },

  fetchComments: function(callback) {
    var that = this;
    $.ajax({
      url: "/api/comments/" + this.id + '/comments',
      type: "GET",
      data: { comment_id: this.id },
      success: function (response) {
        that.comments().set(response.comments, {parse: true});
      }
    });
  }
});
