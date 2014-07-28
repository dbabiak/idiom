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

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
