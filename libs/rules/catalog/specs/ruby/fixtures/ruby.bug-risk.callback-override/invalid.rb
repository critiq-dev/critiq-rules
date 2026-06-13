# RB-LI1106: after_commit with same method overrides previous
class User < ApplicationRecord
  after_commit :log_action
  after_commit :log_action
end
