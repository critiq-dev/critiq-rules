# RB-LI1107 / RB-RL1048: drop_table in change — not reversible
class DropComments < ActiveRecord::Migration[7.0]
  def change
    drop_table :comments
  end
end
