# Correct: using modern validates syntax
class Product < ApplicationRecord
  validates :name, presence: true
  validates :price, numericality: true
end
