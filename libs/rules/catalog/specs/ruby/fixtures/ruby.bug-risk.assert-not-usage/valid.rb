# Uses assert_not — OK
class UserTest < ActiveSupport::TestCase
  def test_validation
    user = User.new
    assert_not user.invalid?
  end
end
