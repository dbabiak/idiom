App.Views.SolutionView = Backbone.View.extend({
  template: JST['solutions/show'],

  className: 'read-editor',

  initialize: function(options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
  },

  render: function() {
    var content = this.template({solution: this.model});
    this.$el.html(content);
    return this;
  }

});
