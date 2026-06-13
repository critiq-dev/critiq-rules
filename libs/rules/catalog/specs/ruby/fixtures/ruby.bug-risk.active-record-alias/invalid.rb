class UserService
  def update_profile(user, attrs)
    user.update_attributes(attrs)
    user.update_attributes!(email: attrs[:email])
  end
end
