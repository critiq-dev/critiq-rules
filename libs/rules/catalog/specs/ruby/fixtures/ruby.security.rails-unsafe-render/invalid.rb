class PagesController < ApplicationController
  def preview
    render(html: params[:body])
  end
end
