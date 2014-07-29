class RenameCommentCol < ActiveRecord::Migration
  def change
    rename_column :comments, :solution_id, :commentable_id
  end
end
