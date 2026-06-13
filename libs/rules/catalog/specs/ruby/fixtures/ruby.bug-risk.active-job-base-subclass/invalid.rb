class OldJob < ActiveJob::Base
  def perform
    puts "working"
  end
end
