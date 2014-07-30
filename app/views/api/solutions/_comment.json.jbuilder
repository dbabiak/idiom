json.id comment.id
json.content comment.content
json.submitter comment.user.username
json.commentable_type 'comment'
json.comments comment.comments.each do |comm|
  json.partial! 'comment', comment: comm
end

json.time_ago time_ago(comment.created_at)
json.created_at comment.created_at
