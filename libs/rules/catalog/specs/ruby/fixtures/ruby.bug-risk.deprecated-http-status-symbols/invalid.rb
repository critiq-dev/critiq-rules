# RB-RL1029: symbolic HTTP status code
class UsersController < ApplicationController
  def create
    render json: @user, status: :created
  end
end
