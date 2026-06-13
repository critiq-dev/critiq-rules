# RB-RL1045: uses negative assertion style
class UserTest < ActiveSupport::TestCase
  test 'user is valid' do
    refute user.errors.any?
  end
end
