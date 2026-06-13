# RB-RL1043: redundant with_options receiver
class User < ApplicationRecord
  with_options dep: :destroy do |assoc|
    assoc.has_many :comments
  end
end
