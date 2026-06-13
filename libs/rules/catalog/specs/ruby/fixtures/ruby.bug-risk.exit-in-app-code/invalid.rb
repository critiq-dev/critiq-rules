# RB-RL1021: exit in app code
class UsersController < ApplicationController
  def destroy
    exit(1)
  end
end
