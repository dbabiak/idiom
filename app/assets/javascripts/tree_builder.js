//returns a nested json blob for parsing by the visualization library
App.Tree = function(problems, options) {
  var root = {
    'id': '0',
    'name': 'root',
    'data': {},
    'children': []
  };

  var subRoots = ['recursion', 'fundamentals', 'algorithms'];
  subRoots.forEach(function(name) {
    var subRoot = App.Tree.rootNode(name, 0);
    root.children.push(subRoot);
    App.Tree.makeSubTree(subRoot, problems);
  });

  return root;
}

App.Tree.makeSubTree = function(root, problems) {
  // add all problem children
  problems.forEach(function(problem) {
    if (problem.rating === root.data.rating && problem.category === root.name) {
      root.children.push(App.Tree.problemNode(problem));
    }
  });
  if (root.children.length > 0) {
    //With the rating bumped up by one.
    var subRoot = App.Tree.rootNode(root.name, root.data.rating + 1)
    root.children.push(subRoot);
    App.Tree.makeSubTree(subRoot, problems);
  }
  // go one level deeper into tree if problem children nonempty
};

// This might need changing:
App.Tree.nid = 0;

App.Tree.rootNode = function(name, rating) {
  var node = {};
  node['id'] = "_" + (++App.Tree.nid);
  node['name'] = name;
  node['data'] = { 'rating': (rating || 0) };
  node['children']= [];
  return node;
};

App.Tree.problemNode = function(problem) {
  debugger;
  var node = {}
  node['id'] = problem.id;
  node['name'] = problem.title;
  node['data'] = {'description': problem.description};
  node['children'] = [];
  return node;
};
