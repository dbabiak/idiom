/* global App */
App.Routers.AppRouter = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
  },
  routes: {
    '': 'problemsIndex',
    'problems/new': 'problemsNew',
    'problems/:id': 'problemsShow'
  },
  problemsIndex: function() {
    debugger;
    App.problems.fetch();
    var indexView = new App.Views.ProblemsIndexView({collection: App.problems});
    this._swapView(indexView);
  },
  problemsNew: function() {
    
  },
  problemsShow: function(id) {
    debugger;
    var problem = App.problems.getOrFetch(id);
    //Should the get or fetch call be done inside the view?
    var showView = new App.Views.ProblemsShowView({model: problem});
    this._swapView(showView);
  },
  _swapView: function(newView) {
    debugger;
    if (this.currentView) { this.currentView.remove(); }
    this.currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
});
