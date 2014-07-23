App.Views.SolutionCaseIndexView = Backbone.View.extend({
  initialize: function(){
    //this.collection = options.collection
    this.listenTo(this.collection, 'add', this.addSolutionCase);
  },
  tagName: 'ul',
  template: JST['solution_cases/index'],
  render: function() {
    this.collection.fetch();
    var content = this.template();
    this.$el.html(content);
    var that = this;
    this.collection.each(function(solutionCase) {
      var view = new App.Views.SolutionCaseView({model: solutionCase});
      debugger;
      that.$el.append(view.render().$el);
      //EDITOR WILL SET THE THING UP HERE.
    });
    return this;
  },
  addSolutionCase: function(solutionCase) {
    debugger;
    var view = new App.Views.SolutionCaseView({model: solutionCase});
    this.$el.append(view.render().$el);
  }
});


App.Views.SolutionCaseView = Backbone.View.extend({
  template: JST['solution_cases/show'],
  tagName: 'li',
  initialize: function(options) {
    this.listenTo(this.model, 'sync', this.render);
  },
  render: function() {
    var content = this.template({solutionCase: this.model});
    this.$el.html(content);
    return this;
  },
  
});