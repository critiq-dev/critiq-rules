class PagesController < ApplicationController
  def preview
    render(html: "<p>static</p>")
  end
end
