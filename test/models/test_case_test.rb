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

require 'test_helper'

class TestCaseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
