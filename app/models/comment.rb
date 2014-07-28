# == Schema Information
#
# Table name: comments
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  solution_id :integer          not null
#  content     :text             not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :solution
  validates :user_id, :solution_id, :content, presence: true
end
