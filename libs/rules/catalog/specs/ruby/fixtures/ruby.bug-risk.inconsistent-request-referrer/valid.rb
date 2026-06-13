# Uses request.referer (correct spelling) — OK
class ApplicationController < ActionController::Base
  def redirect_back
    redirect_to request.referer || root_url
  end
end
