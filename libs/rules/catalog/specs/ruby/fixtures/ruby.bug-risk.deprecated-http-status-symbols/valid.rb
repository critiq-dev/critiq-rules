# No status symbol — OK
class UsersController < ApplicationController
  def create
    render json: @user
  end
end
