#This should really be abstracted in the future
json.solutions @solutions do |solution|
  json.id solution.id
  json.content solution.content
  json.submitter solution.submitter.username
end
