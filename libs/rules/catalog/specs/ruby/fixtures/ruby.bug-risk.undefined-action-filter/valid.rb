# before_action has matching def — OK
class AdminController < ApplicationController
  before_action :require_admin
  def require_admin
  end
  def index
  end
end
