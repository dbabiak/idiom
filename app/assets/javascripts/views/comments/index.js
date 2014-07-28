App.Views.CommentsIndexView = Backbone.View.extend({
  template: JST['comments/index'],
  initialize: function() {
    //this.collection = options.collection;
    this.listenTo(this.collection, 'sync add', this.render);
  },

  className: 'comment-index',
  
  render: function() {
    var content = this.template();
    this.$el.html(content);
    var $commentsIndex = this.$('.comment-list');
    this.collection.each(function(comment) {
      var indexRow = new App.Views.CommentsIndexRow({model: comment});
      $commentsIndex.append(indexRow.render().$el);
    });
    return this;
  }

});

App.Views.CommentsIndexRow = Backbone.View.extend({
  template: JST['comments/index_row'],
  initialize: function() {},
  render: function() {
    var content = this.template({comment: this.model});
    this.$el.html(content);
    return this;
  }
});
