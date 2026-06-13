# Different exception classes rescued
begin
  risky_call
rescue ArgumentError => e
  log(e.message)
rescue TypeError => e
  log(e.message)
end

# Single rescue
begin
  process(data)
rescue StandardError => e
  handle_error(e)
end

# No duplicate rescues
begin
  perform_action
rescue ArgumentError => e
  handle_arg(e)
rescue StandardError => e
  handle_std(e)
end
