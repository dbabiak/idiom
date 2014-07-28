App.Views.NewCommentView = Backbone.View.extend({
  template: JST['comments/new'],
  initialize: function(options) {
    //this.collection = options.collection;
    this.parent = options.parent;
    this.numCols = options.numCols
  },

  className: 'new-comment',

  events: {
    'click submit': 'submit'
  },


  render: function() {
    var content = this.template({numCols: this.numCols});
    this.$el.html(content);
    return this;
  },

  submit: function(event) {
    debugger;
    //make a post to the commentable controller with the parent info.
    //this is a little different since it's polymorphic
  }
});
