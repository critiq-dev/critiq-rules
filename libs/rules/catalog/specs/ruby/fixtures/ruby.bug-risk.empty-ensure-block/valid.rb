begin
  do_stuff
ensure
  cleanup
end

begin
  perform_task
rescue => e
  log(e)
ensure
  close_connection
end
