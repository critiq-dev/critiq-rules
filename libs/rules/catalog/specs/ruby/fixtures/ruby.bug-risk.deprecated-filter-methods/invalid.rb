class OldController < ApplicationController
  before_filter :authenticate_user!
  after_filter :log_action
  around_filter :wrap_in_transaction
end
