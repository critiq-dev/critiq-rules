# RB-RL1027: instance variable in helper
module ApplicationHelper
  def header_title
    @page_title || "Default"
  end
end
