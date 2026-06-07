class PagesController < ApplicationController
  def preview
    render inline: "<h1><%= params[:title] %></h1>"
  end
end
