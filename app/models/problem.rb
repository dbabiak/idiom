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
#

class Problem < ActiveRecord::Base
  belongs_to :submitter, class_name: 'User', foreign_key: :submitter_id
  has_many :solutions

  validates :title, :description,:submitter_id, :solution_spec,
      :example_spec, presence: true
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
          # this should probably be done in rspec eventually
          result = eval(self.solution_spec)
        end
      rescue Exception => e
        puts e.message
        debugger
        result = false
      end
    end
    thr.join
    result
  end

end
