class RedirectsController < ApplicationController
  def back
    redirect_to params[:return_to], allow_other_host: true
  end
end
