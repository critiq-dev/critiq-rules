# RB-RL1050: safe navigation with blank is redundant
class PostController < ApplicationController
  def show
    redirect_to root_url if params[:id]&.blank?
  end
end
