# Uses &. (safe navigation) — OK
class UserPresenter
  def display_name(user)
    user&.name
  end
end
