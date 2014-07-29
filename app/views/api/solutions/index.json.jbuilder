#This should really be abstracted in the future
json.solutions @solutions do |solution|
  json.extract! solution, :id, :content
  json.submitter solution.submitter.username
  json.problem_title solution.problem.title
  json.rating solution.problem.rating
  json.category solution.problem.category
  json.upvotes solution.likes
  json.commentable_type 'solution'
  json.comments solution.comments do |comment|
    json.extract! comment, :id, :content, :created_at
    json.submitter comment.user.username
    json.commentable_type 'comment'
  end

end
