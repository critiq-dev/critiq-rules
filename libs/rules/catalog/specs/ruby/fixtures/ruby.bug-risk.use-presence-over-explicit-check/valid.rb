# Uses .presence — OK
class ProfileController
  def display_name(user)
    user.name.presence
  end
end
