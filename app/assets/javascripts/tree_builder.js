App.Tree = function(problems, options) {
  var root = App.Tree.rootNode()

  var categories = ['recursion', 'fundamentals', 'algorithms', 'data-structures', 'logic'];
  categories.forEach(function(category) {
    var subRoot = App.Tree.rootNode({
      category: category,
      rating: 0
    });
    root.children.push(subRoot);
    App.Tree.makeSubTree(subRoot, problems);
  });

  return root;
}

App.Tree.makeSubTree = function(root, problems) {
  // add all problem children
  problems.forEach(function(problem) {
    if (problem.rating === root.rating && problem.category === root.category) {
      root.children.push(App.Tree.problemNode(problem));
    }
  });
  // debugger;
  if (root.children.length > 0) {
    //With the rating bumped up by one.
    var subRoot = App.Tree.rootNode({
      category: root.category, 
      rating: root.rating + 1
    });
    root.children.push(subRoot);
    App.Tree.makeSubTree(subRoot, problems);
  }
  // go one level deeper into tree if problem children nonempty
};

// This might need changing:
App.Tree.nid = 0;

App.Tree.rootNode = function(options) {
  options = options || {};
  var node = {};
  node.id = "_" + (++App.Tree.nid);
  node.rating = options.rating;
  node.category = options.category;
  node.children = [];
  node.name = (node.category + ': ' + options.rating || 'big root');   
  return node;
};

App.Tree.problemNode = function(problem) {
  var node = {}
  node.id = problem.id;
  node.name = problem.title;
  node.description = problem; 
  node.children = [];
  return node;
};


var RFT = App.RatingFirstTree = function(problems) {
  var root = rootNode();

  var ratings = [0, 1, 2, 3]
  var categories = ['recursion', 'fundamentals', 'algorithms', 'data-structures', 'logic'];
  ratings.forEach(function(rating) {
    var subRoot = App.RatingFirstTree.rootNode(rating);
    root.children.push(subRoot);
    App.RatingFirstTree.makeSubTree(subRoot, problems, categories);
  });
  return root;
}

App.RatingFirstTree.nid = 0;
//What do we get by having it be a constructor? 
//this is simply a bundle of information
App.RatingFirstTree.rootNode = function(options) {
  options = options || {};
  var node = {};
  node.id = "_" + (++App.RatingFirstTree.nid);
  node.rating = options.rating;
  node.category = options.category;
  node.children = [];
  return node;
};

App.RatingFirstTree.problemNode = function(problem) {
  var node = {}
  node.id = problem.id;
  node.name = problem.title;
  node.description = problem.description;
  node.children = [];
  return node;
};

App.RatingFirstTree.makeSubTree = function(root, problems, categories) {
  // add all problem children
  //We want to add all the category subtrees. 
  categories.forEach(function(category) {
    var categoryRoot = App.RatingFirstTree.rootNode({
      category: category,
      rating: root.rating
    });
    root.children.push(categoryRoot);
    App.RatingFirstTree.makeCategorySubTree(categoryRoot, problems);
  })
};

App.RatingFirstTree.makeCategorySubTree = function(categoryRoot, problems) {
  problems.forEach(function(problem) {
    if (problem.rating === categoryRoot.rating && problem.category === root.category) {
      root.children.push(App.Tree.problemNode(problem));
    }
  });
}
