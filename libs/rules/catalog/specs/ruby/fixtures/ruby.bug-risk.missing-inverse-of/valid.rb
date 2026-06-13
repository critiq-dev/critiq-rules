# Has inverse_of — OK
class Post < ApplicationRecord
  has_many :comments, inverse_of: :post
end
