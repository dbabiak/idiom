App.Models.Solution = Backbone.Model.extend({
  urlRoot: '/api/solutions',
  comments: function() {
    if (!this._comments) {
      this._comments = new App.Collections.Comments([], {solution: this});
    }
    return this._comments;
  }
  ,

  fetchComments: function(callback) {
    var that = this;
    $.ajax({
      url: "/api/solutions/" + this.id + '/comments',
      type: "GET",
      data: { solution_id: this.id },
      success: function (response) {
        that.comments().set(response.comments, {parse: true});
        callback(that.comments());
      }
    });
  }
});
