# Correct lifecycle order
class User < ApplicationRecord
  before_save :normalize
  after_commit :do_cleanup
end
