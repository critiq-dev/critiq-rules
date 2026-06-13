# RB-RL1032: before_action with no matching def
class AdminController < ApplicationController
  before_action :require_admin
  def index
  end
end
