class CreateSolutionCases < ActiveRecord::Migration
  def change
    create_table :solution_cases do |t|
      t.integer :problem_id, null: false
      t.text :content, null: false

      t.timestamps
    end
    add_index :solution_cases, :problem_id
  end
end
