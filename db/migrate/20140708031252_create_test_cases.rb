class CreateTestCases < ActiveRecord::Migration
  def change
    create_table :test_cases do |t|
      t.integer :problem_id
      t.text :content

      t.timestamps
    end
  end
end
