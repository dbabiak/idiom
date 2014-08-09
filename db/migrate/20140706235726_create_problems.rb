class CreateProblems < ActiveRecord::Migration
  def change
    create_table :problems do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.text :example_spec, null: false
      t.text :solution_spec, null: false
      t.integer :submitter_id, null: false

      t.timestamps
    end
    add_index :problems, :submitter_id
    # add_index :problems, :title, unique: true
  end
end
