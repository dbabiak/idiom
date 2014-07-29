// App.Views.CommentChain
App.Views.CommentChain = Backbone.Views.extend({
  template: JST['comments/comment_chain'],
  initialize: function(options) {
    this.parent = options.parent;
    this.comments = options.comments;
    this.padding = options.padding;
  },

  render: function() {
  var content = this.template();
  this.$el.html(content);
  this.attachComments;  
  this.$('.comment-list').css('display', 'none');
  return this;
  },

  attachComments: function() {
    this.comments.each(function(comment) {
    // var padding = Math.min(180, ndx * 30);
    // A comment will attach its children with a given offset
    var indexRow = new App.Views.CommentsIndexRow({
      model: comment,
      padding: this.padding,
      parent: this.parent
    });
    this.$('.comment-list').append(indexRow.render().$el);
  }, 

  events: {
    'click a.toggle-comments': 'toggle-comments',
    'click a.reply': 'openReply',
    'click a.submit-reply': 'submitReply'
    'click a.close-reply': 'closeReply'
  },

  toggleComments: function(event) {
    event.preventDefault();
    this.$('.comment-list').slideToggle(800);
    var commentToggle = this.$('a.toggle-comment')
    var symbol = (commentToggle.html() === '+') ? '-' : '+';
    commentToggle.html(symbol);
  },

  reply: function(event) {
    event.preventDefault();
    var commentBox = new App.Views.NewCommentView({
      numCols: 20
    });
    //Don't append to $el, you prepend to the comment list
    this.$(.'comment-list').prepend(commentBox.render().$el);
  }
  // then we have submit and close actions as well
  // we'll also need to recursively create a json object 
  // with jbuilder
});