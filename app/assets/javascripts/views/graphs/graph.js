App.Views.SubGraphView = Backbone.View.extend({
  template: JST['graphs/graph'],
  render: function() {
    this.$el.html(this.template({collection: this.collection}));
    return this;
  }
})
