class CreateProblemSolutions < ActiveRecord::Migration
  def change
    create_table :problem_solutions do |t|
      t.integer :problem_id, null: false
      t.integer :submitter_id, null: false
      t.text :content, null: false

      t.timestamps
    end
    add_index :problem_solutions, :problem_id
    add_index :problem_solutions, :submitter_id
  end
end
