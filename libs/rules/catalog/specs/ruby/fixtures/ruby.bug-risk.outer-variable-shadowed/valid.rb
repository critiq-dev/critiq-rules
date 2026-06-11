items = [1, 2, 3]
label = "item"

items.each do |item|
  puts item
end

result = items.map { |x| x * 2 }
