class User < ApplicationRecord
  self.ignored_columns = [:email]

  scope :by_name, ->(val) { find_by(name: val) }
end
