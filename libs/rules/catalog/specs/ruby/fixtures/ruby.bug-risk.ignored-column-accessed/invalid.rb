class User < ApplicationRecord
  self.ignored_columns = [:email]

  scope :by_email, ->(val) { find_by(email: val) }
end
