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
    this.attachComments;
    this.$('.comment-list').css('display', 'none');
    this.$el.css('padding', this.padding + 'px')
    return this;
  },

  attachComments: function() {
    debugger;
    this.comments.each(function(comment) {
      var indexRow = new App.Views.CommentShow({
        model: comment,
        padding: this.padding + 20,
        parent: this.parent
      });
      this.$('.comment-list').append(indexRow.render().$el);
    });
  },

  events: {
    'click a.toggle-comments': 'toggle-comments',
    'click a.reply': 'openReply',
    'click a.submit-reply': 'submitReply',
    'click a.close-reply': 'closeReply'
  },

  toggleComments: function(event) {
    debugger;
    event.preventDefault();
    this.$('.comment-list').slideToggle(800);
    var commentToggle = this.$('a.toggle-comment');
    var symbol = (commentToggle.html() === '+') ? '-' : '+';
    commentToggle.html(symbol);
  },

  openReply: function(event) {
    event.preventDefault();
    // abort mission if comment already in progress
    if (this.commentOpen) { return; }
    this.commentOpen = true;
    var commentBox = new App.Views.NewCommentView({
      numCols: 20
    });
     this.$('.new-comment').append(commentBox.render().$el);
  },

  submitReply: function(event) {
    //This has to post to server properly. 
    event.preventDefault();
    this.$('.new-comment').children().remove();
    this.commentOpen = false;
    var comment = new App.Models.Comment({})
    debugger;
  },

  closeReply: function(event) {
    event.preventDefault();
    this.commentOpen = false;
    this.$('.new-comment').children().remove();
  }
});
