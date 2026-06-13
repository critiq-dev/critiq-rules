# Rescue present before else
begin
  perform_action
rescue StandardError => e
  logger.error(e)
else
  logger.info("completed")
end

# No else at all
begin
  perform_action
rescue StandardError => e
  logger.error(e)
end

# No begin block
if condition
  do_something
else
  do_other
end
