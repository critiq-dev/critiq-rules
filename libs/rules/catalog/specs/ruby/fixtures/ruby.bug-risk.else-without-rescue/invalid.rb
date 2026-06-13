# RB-LI1080: else without rescue in begin block
begin
  perform_action
else
  logger.info("completed")
end

# Also flagged: no rescue clause
begin
  process_data(data)
else
  handle_completion
end
