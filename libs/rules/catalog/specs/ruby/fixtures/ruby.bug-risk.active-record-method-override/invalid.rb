class User < ApplicationRecord
  def save
    transaction do
      super
      update_cache
    end
  end

  def destroy
    soft_delete
  end
end
