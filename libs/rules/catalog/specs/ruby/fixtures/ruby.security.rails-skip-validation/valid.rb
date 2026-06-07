class UsersController < ApplicationController
  def promote
    @user.update(admin: true)
  end
end
