class AdminController < ApplicationController
  before_action :authenticate

  private

  def authenticate
    authenticate_or_request_with_http_basic do |username, password|
      User.authenticate(username, password)
    end
  end
end
