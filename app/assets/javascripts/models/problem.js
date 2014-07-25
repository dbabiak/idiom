App.Models.Problem = Backbone.Model.extend({
  urlRoot: '/api/problems',
  solutions: function() {
    if (!this._solutions) {
      this._solutions = new App.Collections.Solutions([], {problem: this});
    }
    return this._solutions;
  }
  ,

  fetchSolutions: function(callback) {
    var that = this;
    $.ajax({
      url: "/api/problems/" + this.id + '/solutions',
      type: "GET",
      data: { problem_id: this.id },
      success: function (response) {
        that.solutions().set(response.solutions, {parse: true});
        callback(that.solutions());
      }
    });
  }
});
