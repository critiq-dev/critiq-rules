class ModernController < ApplicationController
  before_action :authenticate_user!
  after_action :log_action
  around_action :wrap_in_transaction
end
