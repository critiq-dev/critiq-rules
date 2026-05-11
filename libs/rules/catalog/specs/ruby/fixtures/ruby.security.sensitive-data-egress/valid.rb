class ProxyController < ApplicationController
  def forward
    URI.open("https://example.com/health")
  end
end
