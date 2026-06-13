# RB-RL1035: console output instead of logger
class NotificationService
  def send_welcome(user)
    puts "Welcome, #{user.name}!"
  end
end
