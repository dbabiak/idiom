# == Schema Information
#
# Table name: problems
#
#  id           :integer          not null, primary key
#  title        :string(255)      not null
#  description  :text             not null
#  submitter_id :integer          not null
#  created_at   :datetime
#  updated_at   :datetime
#

require 'test_helper'

class ProblemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
