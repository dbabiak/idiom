App.Views.GraphView = Backbone.View.extend({
  template: JST['graphs/example'],
  render: function() {
    this.$el.html(this.template());
    return this;
  }
})
