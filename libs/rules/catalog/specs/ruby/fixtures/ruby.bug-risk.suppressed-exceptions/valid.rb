begin
  risky_call
rescue StandardError => e
  log_error(e.message)
end

begin
  other_call
rescue => e
  puts e
end
