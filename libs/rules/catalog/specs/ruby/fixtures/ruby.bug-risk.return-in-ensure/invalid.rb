def fetch
  begin
    raise 'fail'
  rescue => e
    nil
  ensure
    return :cached
  end
end
