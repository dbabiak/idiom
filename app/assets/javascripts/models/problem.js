App.Models.Problem = Backbone.Model.extend({
  urlRoot: '/api/problems',

  solutionCases: function() {
    if (!this._solutionCases) {
      this._solutionCases = new App.Collections.SolutionCases([], {problem: this});
    }
    return this._solutionCases;
  },
  parse: function(payload) {
    // debugger
    // if (payload.solution_cases) {
    //   this.solutionCases().set(payload.solution_cases, {parse: true});
    //   delete payload.solution_cases;
    // }
    if (payload.solution_cases) {
      debugger;
      this.setSC(payload.solution_cases);
    }
    debugger
    return payload;
  },
  setSC: function(solCases) {
    debugger;
    var sc = new App.Models.SolutionCase({content: 'testtesttest'});
    this.solutionCases().set(sc);
  }

});
