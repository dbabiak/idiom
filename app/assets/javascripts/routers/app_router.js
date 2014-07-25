/* global App */
App.Routers.AppRouter = Backbone.Router.extend({
  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
  },
  routes: {
    // Havin index be '' causes user login to go screwy
    // the index will eat every domain.
    '': 'problemsIndex',
    'problems/new': 'problemsNew',
    'problems/:id': 'problemsShow',
    'users/:id': 'usersShow',
    'profile': 'profile',
    'graph': 'graph'
  },
  problemsIndex: function() {
    // for when router starts getting greedy again
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
  profile: function() {
    App.user.fetch();
    var view = new App.Views.ProfileView({model: App.user});
    this._swapView(view);
  },

  graph: function() {
    var view = new App.Views.GraphView();
    this._swapView(view);
  }

  ,
  _swapView: function(newView) {
    if (this.currentView) { this.currentView.remove(); }
    this.currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }

});
