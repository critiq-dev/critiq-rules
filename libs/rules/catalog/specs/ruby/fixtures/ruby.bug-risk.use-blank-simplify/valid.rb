# Uses blank? — OK
class ApplicationHelper
  def display_name(user)
    if user.blank?
      "Guest"
    else
      user
    end
  end
end
