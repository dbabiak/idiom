# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  user_id          :integer          not null
#  commentable_id   :integer          not null
#  content          :text             not null
#  created_at       :datetime
#  updated_at       :datetime
#  commentable_type :string(255)
#

class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :commentable, polymorphic: true
  has_many :comments, as: :commentable
  validates :user_id, :commentable_id, :commentable_type,
      :content, presence: true
end
