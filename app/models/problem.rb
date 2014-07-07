# == Schema Information
#
# Table name: problems
#
#  id             :integer          not null, primary key
#  title          :string(255)      not null
#  description    :text             not null
#  test_cases     :text             not null
#  solution_cases :text             not null
#  submitter_id   :integer          not null
#  created_at     :datetime
#  updated_at     :datetime
#

class Problem < ActiveRecord::Base
  belongs_to :submitter, class_name: 'User', foreign_key: :submitter_id
  has_many :solutions

  validates :title, :description, :test_cases, :solution_cases, 
      :submitter_id, presence: true
  validates :title, uniqueness: true
end
