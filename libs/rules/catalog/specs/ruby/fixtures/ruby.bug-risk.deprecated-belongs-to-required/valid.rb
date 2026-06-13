# Uses optional: false — OK
class Post < ApplicationRecord
  belongs_to :author, optional: false
end
