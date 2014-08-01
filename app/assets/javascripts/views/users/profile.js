
App.Views.ProfileView = Backbone.View.extend({
  template: JST['users/profile'],

  className: 'col-xs-offset-3',

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.currentList = undefined;
  },

  render: function() {
    // this.$el.hide();
    var content = this.template({user: this.model});
    this.$el.html(content);
    // this.$el.fadeIn(600);
    return this;
  },

  toggleList: function(event) {},

  categorySolutions: function(solutions, cat) {
    return new App.Collections.Solutions(solutions.where({category: cat}), {});
  },

  events: {
    'click a.choose-category': 'setCategory',
    'click a.choose-submitter-type': 'setSubmitterType'
  },

  attachSolutionList: function(event) {
    event.preventDefault();
    if (this.category && this.selectedSolutions) {
      var solutions = this.categorySolutions(this.selectedSolutions, this.category);
      solutions.comparator = 'rating';
      var view = new App.Views.SolutionsIndex({
        collection: solutions,
        includeProblemLink: true,
        includeCommentChain: false,
        removeSubmitter: true,
        category: this.category,
      });
      this.swapSolutionList(view);
    }
  },

  setCategory: function(event) {
    event.preventDefault();
    this.category = event.currentTarget.text;
    this.attachSolutionList(event);
  },

  setSubmitterType: function(event) {
    debugger;
    event.preventDefault();
    if (event.currentTarget.text === 'own solutions') {
      this.selectedSolutions = this.model.ownSolutions();
      this.swapBullet(this.$('#own'));
    } else {
      this.selectedSolutions = this.model.likedSolutions();
      this.swapBullet(this.$('#upvoted'));
    }
    this.attachSolutionList(event);
  },

  swapSolutionList: function(view) {
    var content = view.render().$el;
    content.hide();
    if (this.currentList) { this.currentList.remove(); }

    self.$('#solution-list').append(content);
    content.fadeIn(400);
    this.currentList = view;
  },

  swapBullet: function($newEl) {
    if (this._currentBullet) {
      var txt = this._currentBullet.text().slice(0, -2);
      this._currentBullet.text(txt);
    }
    this._currentBullet = $newEl;
    var newText = $newEl.text() + ' •'
    $newEl.text(newText);
  }


});
