# Uses logger — OK
class NotificationService
  def send_welcome(user)
    Rails.logger.info "Welcome, #{user.name}!"
  end
end
