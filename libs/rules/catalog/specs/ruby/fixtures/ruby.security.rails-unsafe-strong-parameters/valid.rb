class UsersController < ApplicationController
  def user_params
    params.require(:user).permit(:display_name, :phone_number)
  end
end
