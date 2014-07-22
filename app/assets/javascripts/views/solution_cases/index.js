App.Views.SolutionCaseIndexView = Backbone.View.extend({
  initialize: function(){
    //this.collection = options.collection
    this.listenTo(this.collection, 'sync', this.render);
  },
  tagName: 'ul',
  template: JST['solution_cases/index'],
  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.collection.each(function(solutionCase) {
      var view = new App.Views.SolutionCaseView({model: solutionCase});
      this.$el.append(view.render().$el);
      //EDITOR WILL SET THE THING UP HERE.
      debugger
    });
    return this;
  }
});

App.Views.SolutionCaseView = Backbone.View.extend({
  initialize: function(){
    //this.model = options.model
  },
  tagName: 'li',
  template: JST['solution_cases/show'],
  render: function() {
    var content = this.template({solutionCase: this.model});
    this.$el.html(content);
    return this;
  }
});