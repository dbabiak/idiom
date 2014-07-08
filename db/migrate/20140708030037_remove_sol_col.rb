class RemoveSolCol < ActiveRecord::Migration
  def change
    remove_column :problems, :solution_cases
    remove_column :problems, :test_cases
  end
end
