class RenameProbSolsToSols < ActiveRecord::Migration
  def change
    rename_table :problem_solutions, :solutions
  end
end
