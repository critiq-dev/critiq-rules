# No helper module — OK
class ApplicationController < ActionController::Base
  def set_title
    @page_title = "My App"
  end
end
