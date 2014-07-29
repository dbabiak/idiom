App.Views.CommentsIndexView = Backbone.View.extend({
  template: JST['comments/index'],
  initialize: function(options) {
    //this.collection = options.collection;
    this.listenTo(this.collection, 'sync add', this.render);
    this.commentable = options.commentable;
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
    'click a.toggle-comment': 'toggleComments',
    'click a.parent-reply': 'beginComment'
  },

  toggleComments: function(event) {
    event.preventDefault();
    this.$('.comment-list').slideToggle(800);
    var commentToggle = this.$('a.toggle-comment')
    var symbol = (commentToggle.html() === '+') ? '-' : '+';
    commentToggle.html(symbol);
  },

  beginComment: function(event) {
    event.preventDefault();
    this.$('a.parent-reply').toggle()
    //this doesn't have to be a complete new view...
    // fk, no it does. because this is goign to be abstracted for a bundh
    // of other stuff.
    var commentBox = new App.Views.NewCommentView({
      numCols: 20,
      commentable: this.model
    });
    this.$el.append(commentBox.render().$el);
  },

  submit: function(event) {
    event.preventDefault();
    this.$('a.parent-reply').toggle();

  },

  cancel: function(event) {
    event.preventDefault();
    this.$('a.parent-reply').toggle();
  }
});

App.Views.CommentsIndexRow = Backbone.View.extend({
  template: JST['comments/index_row'],
  initialize: function(options) {
    this.padding = options.padding;
    this.commentable = options.commentable;
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
    'click a.reply': 'beginComment',
    'click submit-comment': 'submit',
    'click close': 'close'

  },

  beginComment: function(event) {
    event.preventDefault();
    this.$('a.reply').toggle()
    //this doesn't have to be a complete new view...
    // fk, no it does. because this is goign to be abstracted for a bundh
    // of other stuff.
    var commentBox = new App.Views.NewCommentView({
      numCols: 20,
      commentable: this.model
    });
    this.$el.append(commentBox.render().$el);
  },

  submit: function(event) {
    debugger;
    event.preventDefault();
    this.$('a.reply').toggle();

  },

  close: function(event) {
    event.preventDefault();
    this.$('a.reply').toggle();
  }
});
