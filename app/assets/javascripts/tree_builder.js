var RootNode,
    ProblemNode,
    SolutionNode,
    Tree;
Tree = App.Tree = function(problems, options) {
  var root = new RootNode({id: "root"})
  root.name = 'root'

  // Categories should be a class constant on problems.
  var categories = ['recursion', 'fundamentals', 'algorithms', 'data-structures', 'logic'];
  categories.forEach(function(category) {
    var subRoot = new RootNode({
      id: category[0] + '0',
      category: category,
      rating: 0
    });
    root.children.push(subRoot);
    Tree.makeSubTree(subRoot, problems);
  });
  return root;
}

Tree.makeSubTree = function(root, problems) {
  // add all problem children
  problems.forEach(function(problem) {
    if (problem.rating === root.data.rating &&
        problem.category === root.data.category) {
      root.children.push(new ProblemNode(problem));
    }
  });
  // debugger;
  if (root.children.length > 0) {
    //With the rating bumped up by one.
    var subRoot = new RootNode({
      id: root.data.category[0] + (root.data.rating + 1),
      category: root.data.category,
      rating: root.data.rating + 1
    });
    root.children.push(subRoot);
    Tree.makeSubTree(subRoot, problems);
  }
};

RootNode = function(options) {
  this.id = options.id;
  this.name = (options.category + ': ' + options.rating);
  this.children = [];
  this.data = {
    isRoot: true,
    category: options.category,
    rating: options.rating
  }
};

ProblemNode = function(problem) {
  this.id = problem.id;
  this.name = problem.title;
  this.description = problem;
  this.children = [];
}

SolutionNode = function(solution) {
  this.id = solution.id;
  this.name = solution.problem_title;
  this.children = [];
}

Tree.problemNode = function(problem) {
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
      root.children.push(Tree.problemNode(problem));
    }
  });
}

App.SolutionTree = function(solutions, options) {
  var root = new RootNode({id: "root" + (Tree.nid++)})
  root.name = 'root'
  // Categories should be a class constant on problems.
  var categories = ['recursion', 'fundamentals', 'algorithms', 'data-structures', 'logic'];
  categories.forEach(function(category) {
    var subRoot = new RootNode({
      id: "root" + (App.SolutionTree.nid++),
      category: category,
      rating: 0
    });
    root.children.push(subRoot);
    App.makeSolSubTree(subRoot, solutions);
  });
  return root;
}

App.SolutionTree.nid = 0

App.makeSolSubTree = function(root, solutions) {
  solutions.forEach(function(solution) {
    if (solution.rating === root.data.rating &&
        solution.category === root.data.category) {
      root.children.push(new SolutionNode(solution));
    }
  });

  if (root.children.length > 0) {
    var subRoot = new RootNode({
      id: "_" + (App.SolutionTree.nid++),
      category: root.data.category,
      rating: root.data.rating + 1
    });
    root.children.push(subRoot);
    App.makeSolSubTree(subRoot, solutions);
  }
};
