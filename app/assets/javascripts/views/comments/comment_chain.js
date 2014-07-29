App.Views.CommentChain = Backbone.View.extend({
  template: JST['comments/comment_chain'],
  initialize: function(options) {
    this.comments = options.comments;
    this.listenTo(this.comments, 'sync add', this.render);
    this.parent = options.parent;
    this.padding = options.padding;
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.attachComments();
    this.$('.comment-list').css('display', 'none');
    this.$el.css('padding', this.padding + 'px')
    return this;
  },

  attachComments: function() {
    var that = this;
    this.comments.each(function(comment) {
      var indexRow = new App.Views.CommentView({
        model: comment,
        padding: this.padding + 20,
        parent: this.parent
      });
        that.$('.comment-list:first').append(indexRow.render().$el);
    });
  },

  events: {
    'click a.toggle-comments': 'toggleComments',
    'click a.reply': 'openReply',
    'click a.submit-reply': 'submitReply',
    'click a.close-reply': 'closeReply'
  },

  toggleComments: function(event) {
    event.preventDefault();
    this.$('.comment-list:first').slideToggle(400);
    var commentToggle = this.$('a.toggle-comments:first');
    var symbol = (commentToggle.html() === '+') ? '-' : '+';
    commentToggle.html(symbol);
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
    var commentBox = new App.Views.NewCommentView({
      numCols: 20
    });
    commentBox.$el.css('display', 'none');
    this.$('.new-comment:first').append(commentBox.render().$el);
    commentBox.$el.slideToggle(300);
    return false;
  },

  submitReply: function(event) {
    //This has to post to server properly.
    event.preventDefault();
    var $commentBox = this.$('.new-comment:first').children();
    $commentBox.slideToggle(300, function() {
      $commentBox.remove();
    });

    var comment = new App.Models.Comment({})

    this.commentOpen = false;
    return false;
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
