# No useless comparison
count = 5
limit = 10
result = (count == limit)

# Different variables compared
if value != expected
  puts "ok"
end

# Method chain (not flagged)
result = obj.foo == obj.foo
