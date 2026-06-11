def fetch
  begin
    raise 'fail'
  rescue => e
    return :cached
  end
end
