class RenameUsersLastName < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :last_name, :surname
  end
end
