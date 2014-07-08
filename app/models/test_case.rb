# == Schema Information
#
# Table name: test_cases
#
#  id         :integer          not null, primary key
#  problem_id :integer
#  content    :text
#  created_at :datetime
#  updated_at :datetime
#

class TestCase < ActiveRecord::Base
  belongs_to :problem
  
  validates :problem_id, :content, presence: true
end
