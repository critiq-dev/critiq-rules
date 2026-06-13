# RB-RL1011: nil? || empty? can be blank?
class ApplicationHelper
  def display_name(user)
    if user.nil? || user.empty?
      "Guest"
    else
      user
    end
  end
end
