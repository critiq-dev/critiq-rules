class PreviewsController < ApplicationController
  def save
    session[:preview] = PreviewService.sanitize(params[:preview])
  end
end
