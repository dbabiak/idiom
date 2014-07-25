class AddRatingAndCategory < ActiveRecord::Migration
  def change
    add_column :problems, :rating, :integer
    add_column :problems, :category, :string
  end
end
