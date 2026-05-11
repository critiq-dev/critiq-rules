class RedirectsController < ApplicationController
  def back
    redirect_to safe_return_path(params[:return_to])
  end
end
