# RB-LI1103: after_commit declared before before_save
class User < ApplicationRecord
  after_commit :do_cleanup
  before_save :normalize
end
