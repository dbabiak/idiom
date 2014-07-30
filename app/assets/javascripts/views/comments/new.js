App.Views.NewCommentView = Backbone.View.extend({
  template: JST['comments/new'],
  initialize: function(options) {
    // what do we need here...
    this.root = options.root;
    this.numCols = options.numCols
  },

  className: 'new-comment',

  events: {
    'click a.submit-reply': 'submit'
  },


  render: function() {
    var content = this.template({numCols: this.numCols});
    this.$el.html(content);
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var that = this;
    this.$el.slideToggle(300, function() {
      that.$el.remove();
    });

    var parent_id = this.root.attributes.commentable_type + '_id';
    params = this.$('form').serializeJSON();
    params[parent_id] = this.root.id;
    var comment = new App.Models.Comment(params);
    comment.save({}, {
      success: function(response) {
        that.root.comments().add(response);
      }
    });

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
