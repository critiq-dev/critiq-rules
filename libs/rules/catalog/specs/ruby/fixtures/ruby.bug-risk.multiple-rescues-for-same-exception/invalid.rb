# RB-LI1091: duplicate rescue of same exception class
begin
  risky_call
rescue ArgumentError => e
  log(e.message)
rescue ArgumentError => e
  log(e.message)
end

# Duplicate in another begin block
begin
  process(data)
rescue TypeError => e
  handle_type(e)
rescue TypeError => e
  handle_type_again(e)
end
