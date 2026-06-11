def process(name)
  cleaned = name.strip
  puts cleaned
end

def lookup(cache, id)
  result = cache[id] || default_id
  client.find(result)
end

def greet(name = "world")
  puts "Hello, #{name}"
end
