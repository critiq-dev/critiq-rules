class UsersController < ApplicationController
  def promote
    @user.update_column(:admin, true)
  end
end
