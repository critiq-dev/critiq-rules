class OldMailer < ActionMailer::Base
  def welcome_email
    mail(to: "user@example.com", subject: "Welcome")
  end
end
