class UsersController < ApplicationController
  def user_params
    params.require(:user).permit!
  end

  def create
    User.create(params)
  end
end
