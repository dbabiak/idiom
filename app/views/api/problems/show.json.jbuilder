json.partial!("problem", problem: @problem)
json.commentable_type @problem.class.to_s.downcase
