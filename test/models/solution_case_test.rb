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

require 'test_helper'

class SolutionCaseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
