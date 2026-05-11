class RedirectsController < ApplicationController
  def back
    redirect_to params[:return_to]
  end
end
