json.extract!(@user, :id, :username)


#This should really be abstracted in the future
json.own_solutions @user.solutions do |solution|
  json.id solution.id
  json.problem_id solution.problem_id
  json.content solution.content
  json.problem_title solution.problem.title
end

json.liked_solutions @user.liked_solutions do |solution|
  json.id solution.id
  json.problem_id solution.problem_id
  json.content solution.content
  json.problem_title solution.problem.title
end
