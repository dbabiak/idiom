/* global App, JST*/
App.Collections.Problems = Backbone.Collection.extend({
  url: '/api/problems',
  model: App.Models.Problem,
  getOrFetch: function(id) {
    var problem;
    var problems = this;
    if (problem = this.get(id)) {
      problem.fetch();
    } else {
      problem = new App.Models.Problem({id: id});
      problem.save({
        success: function(response) {
          problems.add(response);
        }
      });
    }
    return problem;
  }
});
