# Conditional return in loop
loop do
  break if done
  process
end

# No early exit in loop
loop do
  process
  break if done
end

# Regular iteration
items.each do |item|
  process(item)
end
