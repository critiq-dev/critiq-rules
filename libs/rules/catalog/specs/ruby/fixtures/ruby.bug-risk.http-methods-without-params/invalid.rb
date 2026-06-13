# RB-RL1028: HTTP method without params
class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get :index
  end
end
