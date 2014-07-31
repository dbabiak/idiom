# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'otto', password: 'markov')

epi_george = User.create(username: 'epicurious_george', password: 'markov')

pesto = User.create(username: 'pesto', password: 'markov')

otto = User.find_by(username: 'otto')

monkey = Problem.create(title: "Monkey Patch Array",
  description: "Define a new instance method on the Array class called second, which returns the second item in an array (similar to the way .first and .last work in Ruby).

If there is no element wisth index 1 in the array, return nil in Ruby, or undefined in Javascript.",
  solution_spec: "expect('.', [1,2,3].second == 2)
  expect('.', [1].second == nil)",
  example_spec: '[3, 4, 5].second
# => 4

[].second
# => nil',
  category: 'fundamentals',
  rating: 0,
  submitter_id: 1
)

Problem.create(title: "Merge Sort",
  description: "Merge sort! Use a helper merge(arr1, arr2) that combines two sorted arrays into a sorted output. Use this in the signature mergesort(arr)",
  solution_spec: "expect('.', merge([0,2,3], [-1,5]) == [-1,0,2,3,5])
  expect('.', mergesort([3,1,5,0,2]) == [0,1,2,3,5])",
  example_spec: 'merge([1,4,10],[3,5]) == [1,3,4,5,10]',
  category: 'algorithms',
  rating: 0,
  submitter_id: 1
)

Problem.create(title: "Power",
  description: "Write a pow(base, exp) that recursively copmutes base to the exp power (for integer exp)",
  solution_spec: "expect('.', pow(3,3) == 27)
  expect('.', pow(4,2) == 16)",
  example_spec: 'pow(3,2) == 9
  pow(4,0) == 1',
  category: 'recursion',
  rating: 0,
  submitter_id: 1
)



Problem.create(title: "Concatenate",
  description: "Create a method that takes in an Array of Strings and uses inject to return the concatenation of the strings.",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "concatenate(['some','words']) == 'somewords'",
  category: 'fundamentals',
  rating: 1,
  submitter_id: 2
)

# more stuff here


Problem.create(title: "Quicksort",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "quicksort(['some','words']) == 'somewords'",
  category: 'algorithms',
  rating: 1,
  submitter_id: 2
)

Problem.create(title: 'Fibonacci numbers',
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "fibonacci(['some','words']) == 'somewords'",
  category: 'recursion',
  rating: 1,
  submitter_id: 2
)

Problem.create(title: "Map",
  description: "Create a method ",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "map(['some','words']) == 'somewords'",
  category: 'fundamentals',
  rating: 1,
  submitter_id: 2
)

Problem.create(title: "String Parsing",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'fundamentals',
  rating: 1,
  submitter_id: 2
)

Problem.create(title: "Map",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'fundamentals',
  rating: 2,
  submitter_id: 2
)

Problem.create(title: "Select",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'fundamentals',
  rating: 2,
  submitter_id: 2
)

Problem.create(title: "Reduce",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'fundamentals',
  rating: 2,
  submitter_id: 2
)

Problem.create(title: "Linked List",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'data-structures',
  rating: 0,
  submitter_id: 2
)

Problem.create(title: "Stack",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'data-structures',
  rating: 0,
  submitter_id: 2
)

Problem.create(title: "Queue",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'data-structures',
  rating: 0,
  submitter_id: 2
)

Problem.create(title: "Doubly Linked List",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'data-structures',
  rating: 1,
  submitter_id: 2
)

Problem.create(title: "Priority Queue",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'data-structures',
  rating: 1,
  submitter_id: 2
)

Problem.create(title: "Solve Sexism",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'fundamentals',
  rating: 2,
  submitter_id: 2
)

Problem.create(title: "n-body problem",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'algorithms',
  rating: 2,
  submitter_id: 2
)

Problem.create(title: "Goldbach conjecture",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'algorithms',
  rating: 2,
  submitter_id: 2
)

Problem.create(title: "Primes Less Than 1000",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'algorithms',
  rating: 2,
  submitter_id: 2
)

Problem.create(title: "Triply-linked list",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'data-structures',
  rating: 2,
  submitter_id: 2
)



Problem.create(title: "Determining if a graph has a solution",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'logic',
  rating: 0,
  submitter_id: 2
)

Problem.create(title: "Reversing linked list",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'logic',
  rating: 0,
  submitter_id: 2
)


Problem.create(title: "Circular linked-list",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'logic',
  rating: 1,
  submitter_id: 2
)

Problem.create(title: "Did Colonel Mustard commit the crime? (!)",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'logic',
  rating: 2,
  submitter_id: 2
)

Problem.create(title: "2 plus 2 ?",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'logic',
  rating: 2,
  submitter_id: 2
)

Problem.create(title: "Should marijuana be delegalized?",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'logic',
  rating: 3,
  submitter_id: 2
)

Problem.create(title: "What is the spoon?",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'logic',
  rating: 3,
  submitter_id: 2
)

Problem.create(title: "One hand clapping",
  description: "Create a method",
  solution_spec: "expect('.', concatenate(['some', 'words','here']) == 'somewordshere')",
  example_spec: "string_parse(['some','words']) == 'somewords'",
  category: 'algorithms',
  rating: 3,
  submitter_id: 2
)

Problem.create(title: "Defining Methods",
  description: "Create a method 'greet' that returns a greeting message. Greet should take in a name as an optional parameter",
  solution_spec: "expect('it handles a greeting with an argument', greet('oskar') == 'Hello, oksar')
  expect('it handles a greeting with no argument', greet == 'Hello there')",
  example_spec: "greet('pedro') == 'Hello, pedro'\ngreet() == 'Hello there'",
  category: 'fundamentals',
  rating: 0,
  submitter_id: 2
)

Problem.create(title: "Monkey Patching",
  description: "Add a method to the Array class that when called on an array, will return the sum of its elements",
  solution_spec: 
"expect('it handles a greeting with an argument', greet('oskar') == 'Hello, oksar')
expect('it handles a greeting with no argument', greet == 'Hello there')",
  example_spec: 
"greet('pedro') == 'Hello, pedro'\ngreet() == 'Hello there'",
  category: 'fundamentals',
  rating: 0,
  submitter_id: 2
)