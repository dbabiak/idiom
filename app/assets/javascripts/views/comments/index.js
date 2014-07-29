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
    var ndx = 0;
    this.collection.each(function(comment) {
      var padding = Math.min(180, ndx * 30);
      var indexRow = new App.Views.CommentsIndexRow({
        model: comment,
        padding: padding
      });
      indexRow.$el.css('padding-left', padding + 'px');
      $commentsIndex.append(indexRow.render().$el);
      ndx++
    });
    this.$('.comment-list').css('display', 'none');
    return this;
  },

  events: {
    'click a.toggle-comment': 'toggleComments'
  },

  toggleComments: function(event) {
    event.preventDefault();
    this.$('.comment-list').slideToggle(800);
    var commentToggle = this.$('a.toggle-comment')
    var symbol = (commentToggle.html() === '+') ? '-' : '+';
    commentToggle.html(symbol);
  }
});

App.Views.CommentsIndexRow = Backbone.View.extend({
  template: JST['comments/index_row'],
  initialize: function(options) {
    this.padding = options.padding;
  },
  render: function() {
    // *********************************
    // ***********************COME BACK TO THIS*******************
    var numCols = 'some number here that we have to figure out'
    var content = this.template({comment: this.model});
    this.$el.html(content);
    return this;
  },

  events: {
    'click a.reply': 'reply',
    'click submit-comment cancel': 'closeCommentBox'
  },

  reply: function(event) {
    event.preventDefault();
    var commentBox = new App.Views.NewCommentView({
      numCols: 20
    });
    this.$el.append(commentBox.render().$el);
  }
});
