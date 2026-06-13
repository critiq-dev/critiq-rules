class UserService
  def update_profile(user, attrs)
    user.update(attrs)
    user.update!(email: attrs[:email])
    user.update_attribute(:name, attrs[:name])
  end
end
