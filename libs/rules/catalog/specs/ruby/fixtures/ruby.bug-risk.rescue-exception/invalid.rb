begin
  run_job
rescue Exception => error
  logger.error(error)
end
