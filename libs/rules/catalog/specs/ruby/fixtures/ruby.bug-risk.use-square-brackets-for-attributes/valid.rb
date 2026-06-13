# Uses square bracket syntax — OK
class UserPresenter
  def display_email
    self[:email]
  end

  def update_name(val)
    self[:name] = val
  end
end
