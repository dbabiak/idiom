/* global App */
App.Routers.AppRouter = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
  },
  routes: {
    '': 'problemsIndex',
    'problems/new': 'problemsNew',
    'problems/:id': 'problemsShow',
    'users/:id': 'usersShow'
  },
  problemsIndex: function() {
    App.problems.fetch();
    var indexView = new App.Views.ProblemsIndexView({collection: App.problems});
    this._swapView(indexView);
  },
  problemsNew: function() {
    
  },
  problemsShow: function(id) {
    var problem = App.problems.getOrFetch(id);
    //Should the get or fetch call be done inside the view?
    var showView = new App.Views.ProblemsShowView({model: problem});
    this._swapView(showView);
  },
  usersShow: function() {
    //so get all their associations... and then>
  }
  ,
  _swapView: function(newView) {
    if (this.currentView) { this.currentView.remove(); }
    this.currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
});
