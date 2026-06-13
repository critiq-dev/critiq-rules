# RB-LI1105: foreign_key matches Rails default convention
class Post < ApplicationRecord
  belongs_to :user, foreign_key: 'user_id'
  has_many :comments, foreign_key: 'post_id'
end
