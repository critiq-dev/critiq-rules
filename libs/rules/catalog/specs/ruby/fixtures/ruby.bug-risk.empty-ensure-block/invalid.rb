begin
  do_stuff
ensure
end

begin
  perform_task
rescue => e
  log(e)
ensure
  # TODO: add cleanup
end
