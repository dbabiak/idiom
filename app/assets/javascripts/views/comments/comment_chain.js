App.Views.CommentChain = Backbone.View.extend({
  template: JST['comments/comment_chain'],
  initialize: function(options) {
    this.comments = options.comments;
    this.listenTo(this.comments, 'sync', function() { this.render(true); });
    this.root = options.root;
    this.padding = options.padding;
  },

  render: function(commentsOpen) {
    var numComments = this.root.numChildren();
    var content = this.template({numComments: numComments});
    this.$el.html(content);
    this.attachComments();
    var display = commentsOpen ? 'block' : 'none';
    this.$('.comment-list').css('display', display);
    this.$('.indented').css('padding-left', '10px')
    return this;
  },

  attachComments: function() {
    var that = this;
    this.comments.each(function(comment) {
      var indexRow = new App.Views.CommentView({
        model: comment,
        padding: this.padding + 35,
        root: this.root
      });
        that.$('.comment-list:first').append(indexRow.render().$el);
    });
  },

  events: {
    'click a.toggle-comments': 'toggleComments',
    'click a.reply': 'openReply',
    'click a.close-reply': 'closeReply'
  },

  toggleComments: function(event) {
    event.preventDefault();
    this.$('.comment-list:first').slideToggle(400);
    // var commentToggle = this.$('a.toggle-comments:first');
    // var symbol = (commentToggle.html() === '+') ? '-' : '+';
    // commentToggle.html(symbol);
    return false;
  },

  openReply: function(event) {
    event.preventDefault();
    // abort mission if comment already in progress
    if (this.commentOpen) {
      this.closeReply(event);
      return false;
    }
    this.commentOpen = true;
    this.attachCommentBox();
    return false;
  },

  attachCommentBox: function() {
    var commentBox = new App.Views.NewCommentView({
      numCols: 20,
      root: this.root
    });
    commentBox.$el.css('display', 'none');
    this.$('.new-comment:first').append(commentBox.render().$el);
    commentBox.$el.slideToggle(300);
  },

  closeReply: function(event) {
    event.preventDefault();

    var $commentBox = this.$('.new-comment:first').children();
    $commentBox.slideToggle(300, function() {
      $commentBox.remove();
    });

    this.commentOpen = false;
    return false;
  }

});
