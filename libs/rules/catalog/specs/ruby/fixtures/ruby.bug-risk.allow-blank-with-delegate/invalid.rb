# RB-RL1016: allow_blank with delegate
class ProfilePresenter
  delegate :name, :email, to: :user, allow_blank: true
end
