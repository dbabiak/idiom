App.Views.GraphView = Backbone.View.extend({
  template: JST['graphs/example'],
  class: 'row',
  render: function() {
    this.$el.html(this.template());
    return this;
  }
})
