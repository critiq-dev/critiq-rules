class ProxyController < ApplicationController
  def forward
    url = params[:url]
    URI.open(url)
  end
end
