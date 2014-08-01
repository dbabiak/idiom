App.Views.SolutionsIndex = Backbone.View.extend({
  template: JST['solutions/index'],

  initialize: function(options) {
    //collection set here
    //listeners?
    this.category = options.category;
    this.includeProblemLink = options.includeProblemLink;
    this.includeCommentChain = options.includeCommentChain;
    this.removeSubmitter = options.removeSubmitter;
    this.listenTo(this.collection, 'sync add', this.render)
  },

  render: function() {
    // this comment doesn't exist
    var self = this;
    this.$el.html(this.template({category: this.category}));
    this.collection.each(function(solution) {
      var view = new App.Views.Solution({
        model: solution,
        includeProblemLink: self.includeProblemLink,
        includeCommentChain: self.includeCommentChain,
        removeSubmitter: self.removeSubmitter
      });
      self.$('.solution-list').append(view.render().$el);
    });
    setTimeout(function() {
      var ids = self.collection.pluck('id');
      ids.forEach(function(id) {
        var editor = ace.edit('solution-' + id);
        editor.setTheme('ace/theme/tomorrow_night_blue');
        editor.setReadOnly(true);
        editor.getSession().setMode('ace/mode/ruby');
      });
    }, 20)
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
