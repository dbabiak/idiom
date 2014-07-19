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

class Problem < ActiveRecord::Base
  belongs_to :submitter, class_name: 'User', foreign_key: :submitter_id
  has_many :solutions
  has_many :solution_cases, inverse_of: :problem
  has_many :test_cases

  validates :title, :description,:submitter_id, presence: true
  validates :title, uniqueness: true

  # check solution --> return true, or return error messages...
  def is_solution?(solution)
    code = solution.content
    result = true
    thr = Thread.start do
      begin
        Timeout::timeout(1.5) do
          $SAFE = 0
          #  the function passed in
          eval(code)
          # get all the test cases, and check em
          result = solution_cases.all? { |sol_case| eval(sol_case.content) }
        end          
      rescue
        puts "INFINITE LOOP"
        result = false
      end      
    end
    thr.join
    result
  end
end
