class AdminController < ApplicationController
  before_action :authenticate

  private

  def authenticate
    authenticate_or_request_with_http_digest do |username|
      User.find_by(name: username)&.password_digest
    end
  end
end
