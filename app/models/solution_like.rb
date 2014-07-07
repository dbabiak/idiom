# == Schema Information
#require "../controllers/solution_likes_controller"

# Table name: solution_likes
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  solution_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class SolutionLike < ActiveRecord::Base
  belongs_to :user
  belongs_to :solution
  
  validates :user_id, :solution_id, presence: true
  validates_uniqueness_of :user_id, scope: :solution_id
end
