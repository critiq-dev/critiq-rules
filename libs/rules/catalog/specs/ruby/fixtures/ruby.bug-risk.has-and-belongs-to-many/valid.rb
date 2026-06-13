# Uses has_many :through — OK
class Post < ApplicationRecord
  has_many :taggings
  has_many :tags, through: :taggings
end
