# RB-RL1042: redundant allow_nil
class User < ApplicationRecord
  validates :name, length: { is: 5 }, allow_nil: true, allow_blank: true
end
