# HTTP method with params — OK
class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get :index, params: { page: 1 }
  end
end
