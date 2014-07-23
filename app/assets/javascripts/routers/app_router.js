/* global App */
App.Routers.AppRouter = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
  },
  routes: {
    // Havin index be '' causes user login to go screwy
    // the index will eat every domain.
    'home': 'problemsIndex',
    'home/problems/new': 'problemsNew',
    'home/problems/:id': 'problemsShow',
    'home/users/:id': 'usersShow',
    'home/users/new': 'usersNew'
  },
  problemsIndex: function() {
    // for when router starts getting greedy again
    // debugger;
    App.problems.fetch();
    var indexView = new App.Views.ProblemsIndexView({collection: App.problems});
    this._swapView(indexView);
  },
  problemsNew: function() {
    var newView = new App.Views.ProblemsNewView();
    this._swapView(newView);
  },
  problemsShow: function(id) {
    var problem = App.problems.getOrFetch(id);
    //Should the get or fetch call be done inside the view?
    var showView = new App.Views.ProblemsShowView({model: problem});
    this._swapView(showView);
  },
  usersShow: function() {
    //so get all their associations... and then>
  },
  usersNew: function() {
    debugger;
  }
  
  ,
  _swapView: function(newView) {
    if (this.currentView) { this.currentView.remove(); }
    this.currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
  
});
