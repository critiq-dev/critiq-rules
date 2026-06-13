# No redundant receiver — implicit method calls
class User < ApplicationRecord
  with_options dep: :destroy do
    has_many :comments
  end
end
