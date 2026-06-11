begin
  risky_call
rescue StandardError => e
  log_error(e.message)
end

begin
  parse(user_input)
rescue => e
  raise
end

begin
  load_data
rescue StandardError
  retry if retries < 3
end
