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

require 'test_helper'

class ProblemSolutionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
