#This should really be abstracted in the future
json.solutions @solutions do |solution|
  json.id solution.id
  json.content solution.content
  json.submitter solution.submitter.username
  json.problem_title solution.problem.title
  json.rating solution.problem.rating
  json.category solution.problem.category
  json.upvotes solution.likes
  json.comments solution.comments, :id, :solution_id, :user_id, :content
end
