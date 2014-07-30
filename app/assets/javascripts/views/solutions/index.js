App.Views.SolutionsIndex = Backbone.View.extend({
  template: JST['solutions/index'],

  initialize: function(options) {
    //collection set here
    //listeners?
    this.category = options.category;
    this.includeProblemLink = options.includeProblemLink;
    this.includeCommentChain = options.includeCommentChain;
    this.listenTo(this.collection, 'sync add', this.render)
  },

  render: function() {
    // this comment doesn't exist
    var that = this;
    this.$el.html(this.template({category: this.category}));
    this.collection.each(function(solution) {
      var view = new App.Views.Solution({
        model: solution,
        includeProblemLink: that.includeProblemLink,
        includeCommentChain: that.includeCommentChain
      });
      that.$('.solution-list').append(view.render().$el);
    });
    this.$('.solution-list').css('display', 'none');
    debugger;
    return this;
  },


  events: {
    'click a.toggle-list': 'toggleList'
  },

  toggleList: function(event) {
    event.preventDefault();
    this.$('.solution-list').slideToggle(500);
  }

});
