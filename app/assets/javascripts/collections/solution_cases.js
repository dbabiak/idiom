
App.Collections.SolutionCases = Backbone.Collection.extend({
  url: '/api/solution_cases',
  model: App.Models.SolutionCase
})
