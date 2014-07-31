App.Views.GraphView = Backbone.View.extend({
  template: JST['graphs/example'],
  className: 'row',
  render: function() {
    this.$el.html(this.template());
    this.attachAuthModal();
    return this;
  },

  attachAuthModal: function() {
    var modal = new App.Views.AuthView();
    this.$el.append(modal.render().$el);
  },


})
