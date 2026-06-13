# Skip filter with only one conditional — OK
class AdminController < ApplicationController
  skip_before_action :require_login, only: [:index]
end
