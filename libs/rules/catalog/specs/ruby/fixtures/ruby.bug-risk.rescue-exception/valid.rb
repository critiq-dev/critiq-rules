begin
  run_job
rescue StandardError => error
  logger.error(error)
end
