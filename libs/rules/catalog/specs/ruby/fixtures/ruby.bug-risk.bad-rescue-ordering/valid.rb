begin
  risky_call
rescue ArgumentError => e
  log_bad_arg(e)
rescue StandardError => e
  log_error(e)
end

begin
  risky_call
rescue Exception => e
  log_fatal(e)
end
