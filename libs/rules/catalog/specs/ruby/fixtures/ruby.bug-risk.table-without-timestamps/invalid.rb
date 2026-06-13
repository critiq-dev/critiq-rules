# RB-RL1013: missing timestamps
class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
    end
  end
end
