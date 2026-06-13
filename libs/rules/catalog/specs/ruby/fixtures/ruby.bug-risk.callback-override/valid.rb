# Distinct callback method names — OK
class User < ApplicationRecord
  after_commit :log_creation
  after_commit :log_update
end
