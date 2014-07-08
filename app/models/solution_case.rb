# == Schema Information
#
# Table name: solution_cases
#
#  id         :integer          not null, primary key
#  problem_id :integer          not null
#  content    :text             not null
#  created_at :datetime
#  updated_at :datetime
#

class SolutionCase < ActiveRecord::Base
  belongs_to :problem

  validates :problem, :content, presence: true
end
