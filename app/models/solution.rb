# == Schema Information
#
# Table name: problem_solutions
#
#  id           :integer          not null, primary key
#  problem_id   :integer          not null
#  submitter_id :integer          not null
#  content      :text             not null
#  created_at   :datetime
#  updated_at   :datetime
#

class Solution < ActiveRecord::Base
  belongs_to :problem
  belongs_to :submitter, class_name: 'User', foreign_key: :submitter_id
  
  validates :problem_id, :submitter_id, :content, presence: true
end
