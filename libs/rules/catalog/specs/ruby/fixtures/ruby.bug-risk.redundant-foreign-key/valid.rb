# Non-default foreign_key — OK
class Post < ApplicationRecord
  belongs_to :author, foreign_key: 'user_id'
  has_many :ratings, foreign_key: 'review_id'
end
