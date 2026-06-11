def lookup(key)
  result = nil
  cache[key]
end

def process(type)
  raise "invalid type" unless type.valid?
  process_valid(type)
end

def compute(value)
  return 0 if value.negative?
  value * 2
end
