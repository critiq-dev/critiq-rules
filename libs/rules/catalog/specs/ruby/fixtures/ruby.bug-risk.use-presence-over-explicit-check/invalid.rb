# RB-RL1038: use presence over explicit check
class ProfileController
  def display_name(user)
    user.name.present? ? user.name : nil
  end
end
