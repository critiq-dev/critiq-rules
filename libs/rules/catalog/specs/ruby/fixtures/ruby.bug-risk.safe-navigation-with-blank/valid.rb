# Uses .blank? without &. — OK
class PostController < ApplicationController
  def show
    redirect_to root_url if params[:id].blank?
  end
end
