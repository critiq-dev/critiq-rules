# No dependent option — OK
class User < ApplicationRecord
  has_many :comments
end
