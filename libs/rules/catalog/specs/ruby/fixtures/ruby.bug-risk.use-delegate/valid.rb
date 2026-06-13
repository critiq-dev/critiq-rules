# Uses delegate — OK
class ProfilePresenter
  delegate :name, to: :@user
end
