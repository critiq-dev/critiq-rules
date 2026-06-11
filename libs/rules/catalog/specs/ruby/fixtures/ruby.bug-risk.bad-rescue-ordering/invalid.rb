begin
  risky_call
rescue Exception => e
  log_fatal(e)
rescue StandardError => e
  log_error(e)
end
