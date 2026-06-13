class ModernJob < ApplicationJob
  def perform
    puts "working"
  end
end
