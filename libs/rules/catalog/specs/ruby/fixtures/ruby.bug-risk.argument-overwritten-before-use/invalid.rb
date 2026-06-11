def process(name)
  name = name.strip
  puts name
end

def lookup(id, cache)
  id = cache[id] || default_id
  client.find(id)
end
