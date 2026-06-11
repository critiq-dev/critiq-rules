def process
  items.each { |x| x.process! }
  result = items.map { |x| x * 2 }
  filtered = items.select { |x| x.positive? }
end
