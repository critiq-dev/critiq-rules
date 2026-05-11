class SettingsController < ApplicationController
  skip_forgery_protection

  def update_email
    current_user.update!(email: params[:email])
  end
end
