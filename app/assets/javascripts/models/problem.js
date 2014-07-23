App.Models.Problem = Backbone.Model.extend({
  initialize: function() {
    this.listenTo(this.solutionCases(), 'sync', this.render)
  },
  urlRoot: '/api/problems',
  solutionCases: function() {
    if (!this._solutionCases) {
      this._solutionCases =
          new App.Collections.SolutionCases([], {problem: this});
    }
    return this._solutionCases;
  },
  parse: function(payload) {
    debugger;
    if (payload.solution_cases) {
      this.solutionCases().set(payload.solution_cases, {parse: true});
      delete payload.solution_cases;
    }
    return payload;
  }
});
