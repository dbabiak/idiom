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
  },
  create: function (callback, solution_cases) {
      var problem = this;

      $.ajax({
        url: "/api/problems",
        type: "POST",
        data: { problem: this.attributes,
          solution_cases: solution_cases
        },
        success: function (newAttrs) {
          debugger;
          _(problem.attributes).extend(newAttrs);

          App.problems.add(problem);
        }
      });
    }
});
