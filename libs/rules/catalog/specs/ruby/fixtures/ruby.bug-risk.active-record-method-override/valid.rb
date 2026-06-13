class User < ApplicationRecord
  before_save :update_cache
  before_destroy :soft_delete
end

class Wallet
  def save
    store_to_disk
  end
end
