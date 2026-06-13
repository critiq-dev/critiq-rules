# Only allow_blank — OK
class User < ApplicationRecord
  validates :name, length: { is: 5 }, allow_blank: true
end
