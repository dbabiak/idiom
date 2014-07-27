
App.Views.GraphProfileView = Backbone.View.extend({
  template: JST['users/graph-profile'],

  className: 'col-xs-offset-3',

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
  },

  render: function() {
    var content = this.template({user: this.model});
    this.$el.html(content);
    return this;
  }

});
