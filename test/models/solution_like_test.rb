# == Schema Information
#
# Table name: solution_likes
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  solution_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

require 'test_helper'

class SolutionLikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
