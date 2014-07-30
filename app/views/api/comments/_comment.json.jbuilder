json.id comment.id
json.content comment.content
json.submitter comment.user.username
json.commentable_type 'comment'
json.comments comment.comments.each do |comm|
  json.partial! 'comments/comment', comment: comm
end
