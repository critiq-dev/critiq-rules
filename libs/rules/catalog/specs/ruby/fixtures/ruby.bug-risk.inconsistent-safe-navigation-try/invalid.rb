# RB-RL1049: .try! instead of &.
class UserPresenter
  def display_name(user)
    user.try!(:name)
  end
end
