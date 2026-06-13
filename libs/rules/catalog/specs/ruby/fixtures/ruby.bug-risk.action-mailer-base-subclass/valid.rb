class ModernMailer < ApplicationMailer
  def welcome_email
    mail(to: "user@example.com", subject: "Welcome")
  end
end
