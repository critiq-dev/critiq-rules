def handler(request)
  File.read(request[:path])
end
