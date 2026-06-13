# RB-RL1030: skip filter with both only/except and if/unless
class AdminController < ApplicationController
  skip_before_action :require_login, only: [:index], if: -> { request.local? }
end
