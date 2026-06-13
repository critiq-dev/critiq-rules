# Uses assert_not — OK
class UserTest < ActiveSupport::TestCase
  test 'user is valid' do
    assert_not user.errors.any?
  end
end
