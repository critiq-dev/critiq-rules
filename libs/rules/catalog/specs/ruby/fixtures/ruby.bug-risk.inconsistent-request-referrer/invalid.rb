# RB-RL1047: misspelling of HTTP referrer header
class ApplicationController < ActionController::Base
  def redirect_back
    redirect_to request.referrer || root_url
  end
end
