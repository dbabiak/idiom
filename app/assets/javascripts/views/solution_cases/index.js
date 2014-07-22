App.Views.SolutionCaseIndexView = Backbone.View.extend({
  initialize: function(){
    //this.collection = options.collection
    this.listenTo(this.collection, 'sync add', this.testSync);
    debugger;
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
  testSync: function() {
    console.log("LINE 22 IN INDEX VIEW")
    this.render();
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
});