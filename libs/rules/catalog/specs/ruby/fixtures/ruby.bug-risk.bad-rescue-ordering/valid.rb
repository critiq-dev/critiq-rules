begin
  risky_call
rescue StandardError => e
  log_error(e)
rescue Exception => e
  log_fatal(e)
end
