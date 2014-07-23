App.Models.Problem = Backbone.Model.extend({
  urlRoot: '/api/problems',

  solutionCases: function() {
    if (!this._solutionCases) {
      this._solutionCases = new App.Collections.SolutionCases([], {problem: this});
    }
    return this._solutionCases;
  }
});
