class PreviewsController < ApplicationController
  def save
    session[:preview] = params[:preview]
  end
end
