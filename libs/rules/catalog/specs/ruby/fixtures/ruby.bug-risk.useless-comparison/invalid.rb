# RB-LI1079: useless comparison with self
count = 5
result = (count == count)

# Also flagged: != self comparison
if value != value
  puts "unreachable"
end

# Also flagged: > self comparison
return if limit > limit
