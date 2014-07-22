App.Views.SolutionCaseIndexView = Backbone.View.extend({
  initialize: function(){
    //this.collection = options.collection
    this.listenTo(this.collection, 'sync', this.testSync);
  },
  tagName: 'ul',
  template: JST['solution_cases/index'],
  render: function() {
    this.collection.fetch();
    var content = this.template();
    this.$el.html(content);
    this.collection.each(function(solutionCase) {
      var view = new App.Views.SolutionCaseView({model: solutionCase});
      this.$el.append(view.render().$el);
      //EDITOR WILL SET THE THING UP HERE.
      debugger
    });
    return this;
  },
  testSync: function() {
    debugger;
  }
});


App.Views.SolutionCaseView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'sync', this.testSync);
  },
  tagName: 'li',
  template: JST['solution_cases/show'],
  render: function() {
    var content = this.template({solutionCase: this.model});
    this.$el.html(content);
    return this;
  },
  testSync: function() {
    debugger;
  }
});