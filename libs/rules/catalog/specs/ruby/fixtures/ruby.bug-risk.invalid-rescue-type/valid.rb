begin
  fail
rescue StandardError => e
  log(e)
end

begin
  fail
rescue => e
  retry
end
