json.id comment.id
json.content comment.content
json.submitter comment.user.username
json.created_at comment.created_at
json.commentable_type 'comment'
json.comments comment.comments.each do |comm|
  json.partial! 'comment', comment: comm
end
