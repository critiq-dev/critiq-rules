# RB-RL1044: class_name uses constant instead of string
class Post < ApplicationRecord
  belongs_to :author, class_name: User
end
