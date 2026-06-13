# RB-RL1009: assert ! should be assert_not
class UserTest < ActiveSupport::TestCase
  def test_validation
    user = User.new
    assert !user.invalid?
  end
end
