begin
  risky_call
rescue StandardError
end

begin
  parse(user_input)
rescue => e
end
