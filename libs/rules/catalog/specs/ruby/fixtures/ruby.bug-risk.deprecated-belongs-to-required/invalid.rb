# RB-RL1010: deprecated required: true in belongs_to
class Post < ApplicationRecord
  belongs_to :author, required: true
end
