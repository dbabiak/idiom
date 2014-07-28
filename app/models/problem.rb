# == Schema Information
#
# Table name: problems
#
#  id            :integer          not null, primary key
#  title         :string(255)      not null
#  description   :text             not null
#  example_spec  :text             not null
#  solution_spec :text             not null
#  submitter_id  :integer          not null
#  created_at    :datetime
#  updated_at    :datetime
#  rating        :integer
#  category      :string(255)
#

class Problem < ActiveRecord::Base
  belongs_to :submitter, class_name: 'User', foreign_key: :submitter_id
  has_many :solutions

  validates :title, :description,:submitter_id, :solution_spec,
      :example_spec, presence: true
  validates :title, uniqueness: true

  # check solution --> return true, or return error messages...
  def check_solution(solution)
    code = solution.content
    result = true
    thr = Thread.start do
      result = {success: true}
      begin
        Timeout::timeout(1.5) do
          #sandbox thread from system calls:
          $SAFE = 0
          #  the function passed in
          eval(code)
          # get all the test cases and check em
          eval(self.solution_spec)
        end
      rescue Exception => e
        result = {success: false, message: e.message}
      end
    end
    thr.join
    result
  end

  private
    def expect(msg, condition)
      raise 'Expected: ' + msg unless condition
    end

end
