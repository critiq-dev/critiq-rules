# Uses change_table — OK
class CombineColumns < ActiveRecord::Migration[7.0]
  def change
    change_table :users, bulk: true do |t|
      t.string :name, null: false
      t.string :email, null: false
    end
  end
end
