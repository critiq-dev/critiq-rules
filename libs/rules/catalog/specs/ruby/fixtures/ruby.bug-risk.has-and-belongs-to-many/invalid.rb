# RB-RL1025: has_and_belongs_to_many should be has_many :through
class Post < ApplicationRecord
  has_and_belongs_to_many :tags
end
