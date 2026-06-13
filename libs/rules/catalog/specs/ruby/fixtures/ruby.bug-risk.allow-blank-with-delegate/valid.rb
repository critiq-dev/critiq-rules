# Uses allow_nil — OK
class ProfilePresenter
  delegate :name, :email, to: :user, allow_nil: true
end
