# RB-RL1026: dependent option creates cascade behavior
class User < ApplicationRecord
  has_many :comments, dependent: :destroy
end
