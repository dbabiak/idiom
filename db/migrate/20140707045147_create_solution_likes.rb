class CreateSolutionLikes < ActiveRecord::Migration
  def change
    create_table :solution_likes do |t|
      t.integer :user_id, null: false
      t.integer :solution_id, null: false

      t.timestamps
    end
    add_index :solution_likes, :user_id
    add_index :solution_likes, :solution_id
  end
end
