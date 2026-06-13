# RB-RL1034: non-null column with no default
class AddAdminToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :admin, :boolean, null: false
  end
end
