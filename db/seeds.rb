Problem.create!([
  {title: "Defining Methods", description: "Create a method 'greet' that returns a greeting message. Greet should take in a name as an optional parameter", example_spec: "greet('pedro') == 'Hello, pedro'\ngreet() == 'Hello there'", solution_spec: "expect('it handles a greeting with an argument', greet('oskar') == 'Hello, oksar')\nexpect('it handles a greeting with no argument', greet == 'Hello there')", submitter_id: 2, rating: 0, category: "fundamentals"},
  {title: "Monkey Patching", description: "Add a method to the Array class that when called on an array, will return the sum of its elements", example_spec: "greet('pedro') == 'Hello, pedro'\ngreet() == 'Hello there'", solution_spec: "expect('it handles a greeting with an argument', greet('oskar') == 'Hello, oksar')\nexpect('it handles a greeting with no argument', greet == 'Hello there')", submitter_id: 2, rating: 0, category: "fundamentals"},
  {title: "name stuff", description: "optional params 'greet'", example_spec: "greet('bob') == 'Hello, bob'", solution_spec: "expect('it works', greet('otto') == 'Hello, otto')\r\nexpect('it works with nil', greet == 'Hello there')", submitter_id: 1, rating: 0, category: "fundamentals"},
  {title: "Stack", description: "Use Array#shift and Array#push to implement a queue.", example_spec: "class Q\r\nend\r\n\r\nQ.push([1,2,3,4]);\r\nQ.shift # -> 1", solution_spec: "expect('i suggest you visit my friends', false)", submitter_id: 1, rating: 0, category: "data-structures"},
  {title: "Find the max", description: "Find the max element in an array. Return both the index and its value", example_spec: "max([3,0,5,2]) == [2, 5]", solution_spec: "expect( 'it works', max([3,72,5,-7,6,10]) == [1, 72])", submitter_id: 1, rating: 0, category: "algorithms"},
  {title: "Second biggest", description: "Find the second biggest element of an array where every element is distinct. Can you do it in a single pass?", example_spec: "second_biggest([6,1,2,14,7]) == 7", solution_spec: "expect('it works', second_biggest([5,1,4,10,7,13]) == 10)", submitter_id: 1, rating: 1, category: "algorithms"},
  {title: "Powers", description: "Write a function that recursively computes b ^ a. ", example_spec: "pow(4,3) == 64\r\npow(5, 2) == 25", solution_spec: "expect('it works', pow(3, 2) == 9)", submitter_id: 1, rating: 0, category: "recursion"},
  {title: "Fibonnaci", description: "Write a recursive function for determining the n'th Fibonnaci number. The Fibonacci numbers are defined by the recurrence fib(n) = fib(n - 1) + fib(n 0 2). Start the sequence from fib(1)  := 0 and fib(2) := 1.", example_spec: "fib(11) == 55\r\nfib(9) == 21", solution_spec: "expect('it works', fib(10) == 34)", submitter_id: 1, rating: 0, category: "recursion"},
  {title: "Linked List", description: "Given the Linked-List class below, write a function that will walk the list and read its values in an array. ", example_spec: "class Node\r\n  attr_accessor :node, :next\r\n\r\n  def initialize(node)\r\n    @node = node\r\n  end\r\nend", solution_spec: "expect('i suggest you visit my friends, they'll have more to say', false)", submitter_id: 1, rating: 1, category: "data-structures"}
])
Solution.create!([
  {problem_id: 3, submitter_id: 1, content: "def greet(name = nil)\r\n  #Your c\r\n  name ? \"Hello, \#{name}\" : \"Hello there\"\r\nend"},
  {problem_id: 5, submitter_id: 1, content: "def max(array)\r\n  #Your code here\r\n  [array.find_index(array.max), array.max]\r\nend"},
  {problem_id: 6, submitter_id: 1, content: "def second_biggest(nums)\r\n  nums.select {|i| i < nums.max}.max\r\nend"}
])
User.create!([
  {username: "otto", password_digest: "$2a$10$vaW76Ifq/wlAuIMMMNuIL.0leL6yXLMoiTQqvlEwmyA3ll3DxWJIO", token: "ut9Z0cIzRWG8_yAtAx1gXg"},
  {username: "epicurious_george", password_digest: "$2a$10$WOGaDl9DE51FF.LODiZj5OOAN32AYE2qM7DKsJU7DOzXtyYeYex1G", token: "Sg3Fwj02bk1BXKBoFbNy_A"},
  {username: "pesto", password_digest: "$2a$10$LHJndeOP4gpGQFUCRFPIw.FNwkWvMs.XsGFs8umVe43Kuc5qjEcJi", token: "_jugnOhZREGI2V9H95PdbA"}
])
